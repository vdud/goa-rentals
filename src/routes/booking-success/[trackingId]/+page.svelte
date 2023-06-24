<script lang="ts">
	import { bookingId } from '$lib/stores/bookingStore';

	import { Elements, PaymentElement } from 'svelte-stripe';

	import StripeImg from '$lib/assets/stripe.webp';

	import type { PageData } from './$types';
	import { calculateTimeSpan } from '$lib/bigFunctions/timeFn';

	export let data: PageData;

	const copyToClip = () => {
		navigator.clipboard.writeText(dataBody._id);
		alert('Copied to clipboard');
	};

	const dataBody = JSON.parse(data.body.findForm);
	const vehicleBody = JSON.parse(data.body.findVehicle);

	$bookingId = dataBody._id;

	console.log('data.body', dataBody);
	console.log('vehicleBody', vehicleBody);

	const payNow = async () => {
		const response = await fetch('/api/checkout-sessions', {
			// http://localhost:5173/api/stripeCheckout
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ bookingId: dataBody._id })
		});

		const res = await response.json();
		const paymentUrl = res.url;

		// open in new tab
		// Open the payment link in a new tab
		const paymentWindow = window.open(paymentUrl, '_blank');
		console.log('paymentWindow', paymentWindow);

		if (paymentWindow) {
			// Listen for payment success or failure events
			const checkPaymentStatus = setInterval(async () => {
				try {
					const paymentResponse = await fetch('/api/check-payment-status', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ sessionId: res.sessionId, bookingId: dataBody._id })
					});

					const paymentStatus = await paymentResponse.json();

					console.log('paymentStatus', paymentStatus);

					if (paymentStatus.status === 'succeeded') {
						// Payment was successful
						clearInterval(checkPaymentStatus);
						const invoiceId = paymentStatus.paymentIntentId;
						console.log('Payment succeeded! Invoice ID:', invoiceId);
					} else if (paymentStatus.status === 'failed') {
						clearInterval(checkPaymentStatus);
						console.log('Payment failed!');
					}
				} catch (error) {
					console.error('Error checking payment status:', error);
				}
			}, 3000);

			// clearInterval(checkPaymentStatus);

			// // Close the payment window and clear the interval when it is closed
			// const closePaymentWindow = () => {
			// 	clearInterval(checkPaymentStatus);
			// 	paymentWindow.close();
			// };

			// paymentWindow.addEventListener('beforeunload', closePaymentWindow);
		} else {
			console.error('Unable to open payment window. Please check your popup blocker settings.');
		}
	};
</script>

<div class="bookingSuccessFul">
	<br />
	<br />
	<h1>Yey</h1>
	<h2>Booking Successful</h2>
	<br />
	<p>Tracking ID: <button class="copyBtn" on:click={copyToClip}>{dataBody._id} 📋</button></p>
	<br />
	<!-- <p>You have recieved an Email regarding the payment link, If the payment is done, you will be able to check the confirmation here, Please note down the tracking Id to track your form-progress.</p> -->
	<br />
	{#if dataBody.paymentStatus === 'unpaid'}
		<div class="buttonPaynow">
			<button class="payNow" on:click={payNow}> Pay Now 🔒</button>

			<div class="bodyContent">
				<h2>Hello {dataBody.Name}</h2>
				<p>We have recieved a form for <span class="bodyConSpan">{vehicleBody.brandName} {vehicleBody.modelName}</span></p>
				<p>We have calculate the total rent of <span class="bodyConSpan">Rs. {dataBody.totalRent}</span></p>
				<p>You will getting the vehicle for <span class="bodyConSpan">{calculateTimeSpan(dataBody.timeSpan)}</span></p>
				<p>Payment Status: <span class="bodyConSpan">{dataBody.paymentStatus.toUpperCase()}</span></p>
				<p>Click on <span class="endPaynow">Pay Now 🔒</span> to complete the payment process</p>
			</div>
		</div>
	{:else}
		<p>Payment Status: {dataBody.paymentStatus.toUpperCase()}</p>
	{/if}
	<!-- {#if stripe}
		<form>
			<Elements {stripe}>
				<PaymentElement />
			</Elements>

		</form>
	{/if} -->
	<p>Thank you for choosing us, We will get back to you soon.</p>
	<br />
	<br />
	<br />
</div>

<style>
	.bodyConSpan {
		font-weight: 600;
		color: var(--primary);

		text-transform: capitalize;
	}
	.bodyContent {
		width: 100%;
		margin: 1rem;
		padding-bottom: 3rem;
	}
	.buttonPaynow {
		width: 80%;
		border: 0.5rem solid var(--primary);
		border-radius: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 3rem;
		position: relative;
	}
	.payNow {
		position: absolute;
		bottom: 0;
		right: 0;
		margin: 1rem;
		padding: 10px 14px;
		border-radius: 3px;
		border: 1px solid var(--primary);
		transition: all 300ms ease-in-out;
	}
	.payNow:hover {
		background-color: var(--primary);
		color: #fff;
		border-radius: 50px;
	}
	.copyBtn {
		background-color: #999;
		border-radius: 3px;
		padding: 4px 10px;
		box-shadow: var(--boxInsetShadows);
	}
	.bookingSuccessFul {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
	}
</style>

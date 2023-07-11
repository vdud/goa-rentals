<script lang="ts">
	import { bookingId } from '$lib/stores/bookingStore';

	import { Elements, PaymentElement } from 'svelte-stripe';

	import StripeImg from '$lib/assets/stripe.webp';

	import type { PageData } from './$types';
	import { calculateTimeSpan } from '$lib/bigFunctions/timeFn';
	import { payNow } from '$lib/bigFunctions/payments';

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

	const payRightNow = () => {
		const payNowDiv = document.getElementById('payNowDiv') as HTMLDivElement;
		payNowDiv.innerHTML = '';

		payNow(dataBody);
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
		<div class="buttonPaynow" id="payNowDiv">
			<button class="payNow" on:click={payRightNow}> Pay Now 🔒</button>

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
		/* color: var(--primary); */

		text-transform: capitalize;
	}
	.bodyContent {
		width: 100%;
		margin: 1rem;
		padding-bottom: 3rem;
	}
	.buttonPaynow {
		width: 80%;
		/* border: 0.5rem solid var(--primary); */
		background-color: var(--primary);
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 3rem;
		position: relative;
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

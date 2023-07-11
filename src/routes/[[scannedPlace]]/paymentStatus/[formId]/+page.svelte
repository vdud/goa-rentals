<script lang="ts">
	import type { PageData } from './$types';
	import { payNow } from '$lib/bigFunctions/payments';

	let dataBody = {
		_id: '',
		Email: '',
		Name: '',
		PhoneNumber: 0,
		PickupLocation: '',
		VehicleId: '',
		currentTime: new Date(),
		dateFrom: '',
		dateTo: '',
		discount: '',
		isHalf: false,
		isJustContact: false,
		paymentInvoiceId: '',
		paymentSessionId: '',
		paymentStatus: '',
		timeSpan: 0,
		totalRent: 0
	};

	export let data: PageData;
	console.log('data', data);
	// console.log('data', JSON.parse(data.body.findForm));
	dataBody = JSON.parse(data.body.findForm);

	const payRightNow = () => {
		payNow(dataBody);
	};
</script>

<div class="textAllData">
	<h2>Hey {dataBody.Name},</h2>
	<div class="flex">
		<p class="flexItem flex1">Total Payable Amount</p>
		<p class="flexItem flex2">:</p>
		<p class="flexItem flex3">₹ {dataBody.totalRent}</p>
	</div>

	<div class="flex">
		<p class="flexItem flex1">Payment Status</p>
		<p class="flexItem flex2">:</p>
		<p class="flexItem flex3">{dataBody.paymentStatus}</p>
	</div>

	{#if dataBody.paymentStatus === 'unpaid'}
		<div class="retryPmnt">
			<h3>Click on the Link Below to Retry the payment</h3>
			<div class="AbsBtn">
				<button class="payNow" on:click={payRightNow}> Retry Payment 🔒 </button>
			</div>
		</div>
	{/if}

	<br />
	<br />
	<p>We have got your number, we will contact you asap</p>
	<p>or else click on the contact us button</p>

	<br />
	<div class="arefBtnDiv">
		<a href="https://wa.me/918700088011" target="_blank" class="arefBtn" rel="noopener noreferrer"> Whatsapp Us </a>
	</div>
</div>

<style>
	.payNow {
		left: 0;
		text-align: left;
	}
	.AbsBtn {
		position: relative;
		width: 100%;
		height: 5rem;
	}
	.retryPmnt {
		text-align: center;
		margin-top: 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: space-around; */
	}
	.arefBtnDiv {
		width: 100%;
		text-align: center;
		margin: 2rem 0;
	}
	.arefBtn {
		background-color: #25d366;
		color: white;
		padding: 1rem;
		border-radius: 1rem;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
		border-bottom: 10px solid #128c7e;
	}
	.arefBtn:hover {
		background-color: #128c7e;
		border-bottom: 0px solid #128c7e;
	}
	.flex2 {
		width: 10%;
		text-align: center;
	}
	.flex1 {
		width: 45%;
		font-weight: 200;
	}
	.flex3 {
		width: 45%;
		text-align: right;

		font-weight: 600;
		text-transform: uppercase;
	}
	.flex {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;

		overflow: hidden;
	}
	.textAllData {
		margin: 5%;
		margin-bottom: 6.66rem;
	}
</style>

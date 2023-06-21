<script lang="ts">
	import { calculateTimeSpan, openedFor } from '$lib/bigFunctions/timeFn';
	import SelectionPrPageTwo from '$lib/components/SelectionPrPageTwo.svelte';
	import { bookingId } from '$lib/stores/bookingStore';
	import { fade } from 'svelte/transition';

	const keyboardShortcuts = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			track();
		}
	};

	const track = async () => {
		if (!$bookingId) {
			error = 'Please enter a tracking ID';
			return;
		}
		const response = await fetch('/api/track-your-vehicle-data', {
			method: 'post',
			body: JSON.stringify((value = $bookingId)),
			headers: { 'Content-Type': 'application/json' }
		});
		const subscribe = await response.json();

		if (subscribe.error) {
			trackData = '';
			error = subscribe.error;
		}
		if (subscribe.success) {
			success = subscribe.success;
			error = '';
			trackData = subscribe.findOrder;
		}
	};

	let value: any = '';
	let error: any = '';
	let success: any = '';
	let trackData: any = {
		Email: '',
		Name: '',
		PhoneNumber: '',
		PickupLocation: '',
		VehicleName: '',
		currentTime: Date.now(),
		dateFrom: '',
		dateTo: '',
		timeSpan: 0,
		_id: '',
		isHalf: true
	};
</script>

<div class="trackingPage">
	<h1>TRACK YOUR ORDER</h1>
	<div class="input">
		<p>Track your Order:</p>
		<input type="text" placeholder="Enter your tracking id..." bind:value={$bookingId} on:keyup={keyboardShortcuts} />
	</div>

	<div class="trackButton">
		<button on:click={track} class="inputButton"> TRACK </button>
	</div>

	<div class="TrackingResults" id="TrackingResults">
		{#if error}
			<span in:fade class="error">{error}</span>
		{:else if success}
			<div class="tranckingData" in:fade>
				{#if !trackData.isHalf}
					<h2>Hello <span>{trackData.Name},</span></h2>
					<p>we are happy to inform you that we have registed your request for <span>{trackData.VehicleName},</span></p>
					<p>
						and you would like to be delivered it to <span>{trackData.PickupLocation}</span>
						we have this request opened from <span>{openedFor(trackData.currentTime)}</span>
					</p>

					<p>also, you want this vehicle for <span>{calculateTimeSpan(trackData.timeSpan)}</span></p>
				{/if}
				{#if trackData.isHalf && trackData.isJustContact}
					<h2>Hello <span>{trackData.Name},</span></h2>
					<p>We will try to contact you as soon as possible!</p>
					<p>Thank you for your patience!</p>
				{/if}
				{#if trackData.isHalf && !trackData.isJustContact}
					<h2>Hello <span>ANON,</span></h2>
					<p>we are happy to inform you that we have registed your request for <span>{trackData.VehicleName},</span></p>
					<p>
						and you would like to be delivered it to <span>{trackData.PickupLocation}</span>
						we have this request opened from <span>{openedFor(trackData.currentTime)}</span>
					</p>

					<p>also, you want this vehicle for <span>{calculateTimeSpan(trackData.timeSpan)}</span></p>

					<p>you can fill in all your information so we can contact you,</p>

					<div class="contactInfo">
						<SelectionPrPageTwo />
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.contactInfo {
		width: 60%;
		padding: 5%;
		margin: 5% 10%;

		border-radius: 1rem;
		border: 1px solid var(--primary);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	span {
		color: var(--primary);
		font-weight: 700;
		/* upper case */
		text-transform: uppercase;
	}
	.tranckingData {
		width: 80%;
		margin: 0 10%;
	}
	.error {
		font-weight: 700;
		color: red;
	}
	.TrackingResults {
		width: calc(100% - 2rem);
		margin: 2rem 0;
	}
	.inputButton {
		padding: 0.5rem 1rem;
		margin: 0.5rem 1rem;
		border-radius: 1rem;
		box-shadow: var(--boxShadows);
		font-weight: 700;
		margin-top: 2rem;
		transition: 0.3s;
	}
	.inputButton:hover {
		background-color: var(--primary);
		color: var(--secondaryColor);
	}
	.input {
		display: flex;

		display: flex;
		justify-content: space-between;

		width: clamp(200px, 80%, 700px);

		margin-top: 2rem;
	}
	.trackButton {
		margin: 0;
	}
	h1 {
		text-align: center;
	}
	.trackingPage {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		margin: 3rem 0;
	}
</style>

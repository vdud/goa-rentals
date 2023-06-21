<script lang="ts">
	import { VehicleName, PickupLocation, dateFrom, dateTo, bookingId, timeSpan } from '../stores/bookingStore';

	// import { dateFrom, dateTo } from '$lib/stores/bookingStore';
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';
	import SelectionPrPageOne from './SelectionPrPageOne.svelte';
	import { backBtnAnimationIn, skipBtnAnimationIn, letsGoAnimationIn, letsGoAnimationOut } from '$lib/bigFunctions/SelectionProcessFunctions';
	import SelectionPrPageTwo from './SelectionPrPageTwo.svelte';
	import { timeSpanCal } from '$lib/bigFunctions/timeFn';

	export let allBikes: any[];

	let isPageTwo = false;
	let isLoading = false;

	const RndmImg = Math.floor(Math.random() * 3) + 1;
	onMount(() => {
		flatpickr('#dateFrom', {
			enableTime: true,
			disableMobile: true,
			dateFormat: 'd-m-Y H:i',
			minDate: 'today',
			maxDate: new Date().fp_incr(14)
		});
		flatpickr('#dateTo', {
			enableTime: true,
			disableMobile: true,
			dateFormat: 'd-m-Y H:i',
			minDate: 'today',
			maxDate: new Date().fp_incr(1000)
		});
	});

	const skipBtnFn = () => {
		skipBtnAnimationIn();
		letsGoAnimationIn();
		setTimeout(() => {
			isPageTwo = true;
			letsGoAnimationOut();
		}, 500);
	};
	const backBtnFn = () => {
		backBtnAnimationIn();
		letsGoAnimationIn();
		setTimeout(() => {
			isPageTwo = false;
			letsGoAnimationOut();
		}, 500);
	};

	const letsGo = async () => {
		if ($PickupLocation === 'Select Location') {
			alert('Please select a Location');
			return;
		}
		if ($dateFrom === '') {
			alert('Please select a Pick Up time');
			return;
		}
		if ($dateTo === '') {
			alert('Please select a Drop Off time');
			return;
		}
		if ($VehicleName === '') {
			alert('Please select a Vehicle');
			return;
		}

		// convert this to number 15-06-2023 12:00
		$timeSpan = timeSpanCal($dateFrom, $dateTo);

		if ($timeSpan < 0) {
			alert('Drop Off time cannot be before Pick Up time');
			return;
		}

		isLoading = true;
		letsGoAnimationIn();

		const response = await fetch('/api/add-page-one-data', {
			method: 'post',
			body: JSON.stringify({
				$PickupLocation,
				$dateFrom,
				$dateTo,
				$VehicleName,
				$timeSpan
			}),
			headers: { 'Content-Type': 'application/json' }
		});
		const res = await response.json();

		// bookingId.set(res);
		$bookingId = res.insertForm.insertedId;

		if (res.insertForm.acknowledged) {
			setTimeout(() => {
				isLoading = false;
				letsGoAnimationOut();
				skipBtnAnimationIn();

				isPageTwo = true;
			}, 500);
		} else {
			alert('Something went wrong');
		}
	};
</script>

<div class="backdropImage">
	<div class="gradientTopBtm" />
	<img class="imageGoaRentalsWide" src="/images/goa-rentals-insta-{RndmImg}.0.1.webp" alt="Biker gang of Goa" />
</div>

<div class="commonSelectionBox selectionTopHeader" id="selectionTopHeader">
	<button id="backBtn" on:click={backBtnFn} class="backNdSkipBtn backBtn">👈 Back</button>
	<button id="skipBtn" on:click={skipBtnFn} class="backNdSkipBtn skipBtn">Skip 👉</button>
</div>
<div class="commonSelectionBox selectionProcess" id="selectionProcess">
	{#if !isPageTwo}
		<SelectionPrPageOne {allBikes} {letsGo} />
	{:else}
		<SelectionPrPageTwo />
	{/if}
</div>

<style>
	.backNdSkipBtn:hover {
		background-color: #fff;
		color: #000;
	}
	.backBtn {
		display: none;
	}
	.backNdSkipBtn {
		color: #fff;
		text-shadow: 0 0 10px #0005;

		margin: 0 1rem;

		background-color: #fff0;
		border-radius: 3px;
		box-shadow: var(--boxShadows);
		transition: all 0.3s ease-in-out;
	}
	.gradientTopBtm {
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, #0000 75%, #eee 99%), linear-gradient(0deg, #0000 75%, #eee 99%);
		position: absolute;
	}
	.backdropImage {
		position: absolute;
		z-index: 0;
		height: 100%;
		width: 100%;
	}
	.imageGoaRentalsWide {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.selectionTopHeader {
		justify-content: space-between;
		flex-direction: row-reverse;

		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;

		border-top: 1px solid #fff5;

		height: 10%;

		margin: 0 30%;

		transform: translateY(2rem);
		z-index: 1;

		transition: transform 0.5s ease-in-out, border-radius 1s ease-out;
	}

	.selectionProcess {
		flex-direction: column;
		justify-content: space-around;

		margin: 2rem 30%;

		height: 90%;

		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;

		border-bottom: 1px solid #fff5;

		padding: 7px 0;

		transition: transform 0.5s ease-in-out;
	}

	.commonSelectionBox {
		width: calc(100% - 60%);

		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(3px);

		background-color: #0000;

		box-shadow: var(--boxShadows);

		transform-style: preserve-3d;
		overflow: hidden;

		position: relative;

		display: flex;
		align-items: center;
	}

	@media screen and (max-width: 768px) {
		.commonSelectionBox {
			width: calc(100% - 10%);
		}
		.selectionTopHeader {
			margin: 0 5%;
		}
		.selectionProcess {
			margin: 2rem 5%;
		}
	}
</style>

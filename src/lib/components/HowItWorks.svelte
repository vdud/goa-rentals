<script lang="ts">
	import { VehicleId, dateFrom, dateTo, PickupLocation } from '$lib/stores/bookingStore';
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	export let allBikes: any[];
	const selectLocation = [
		'Select Location',
		'candolim',
		'calagute',
		'baga',
		'arpora',
		'anjuna',
		'vagator',
		'mapusa',
		'porvrim',
		'parra',
		'assagao',
		'siolim',
		'saligoa',
		'nerul',
		'panjim',
		'thivim',
		'vasco da gama',
		'morjim',
		'ashvem',
		'mandrem'
	];

	const goToSelectionProcss = () => {
		document.getElementById('selectionTopHeaderNav')!.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	};

	onMount(() => {
		flatpickr('#dateFromSub', {
			enableTime: true,
			disableMobile: true,
			dateFormat: 'd-m-Y H:i',
			minDate: 'today',
			maxDate: new Date().fp_incr(14)
		});
		flatpickr('#dateToSub', {
			enableTime: true,
			disableMobile: true,
			dateFormat: 'd-m-Y H:i',
			minDate: 'today',
			maxDate: new Date().fp_incr(1000)
		});
	});
</script>

<br />
<h2 class="headerMain" id="howItWorks">How it Works?</h2>
<br />
<br />

<div class="hiwCommon selectLocation hiwCommon1">
	<div class="hiwText">
		<h2 class="textStyle textStyle2">1. Select Location</h2>
		<p class="textStyle textStyle2 pTextStyle">Choose your preferred location and select your desired vehicle.</p>
		<div class="selection selection1">
			<select class="selectionInput" id="location" name="location" bind:value={$PickupLocation}>
				{#each selectLocation as location}
					<option value={location}>{location.toUpperCase()}</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="hwImg">
		<img class="boxHIWImg" src="/images/how-it-works-images/how-it-works-1.webp" alt="Loction Selection for rental service image" />
	</div>
</div>

<div class="hiwCommon choosePickupAndDropOffTime hiwCommon2">
	<div class="hwImg">
		<img class="boxHIWImg" src="/images/how-it-works-images/how-it-works-2.webp" alt="Choose Pickup Time image" />
	</div>
	<div class="hiwText">
		<h2 class="textStyle">2. Choose Pickup Time</h2>
		<p class="textStyle pTextStyle">Select your preferred pickup time and date.</p>
		<div class="selection selection2">
			<input class="selectionInput" type="text" name="dateFrom" id="dateFromSub" bind:value={$dateFrom} placeholder="Choose Pick Up Time" />
		</div>
	</div>
</div>

<div class="hiwCommon choosePickupAndDropOffTime hiwCommon1">
	<div class="hiwText">
		<h2 class="textStyle textStyle2">3. Choose Drop-off Time</h2>
		<p class="textStyle pTextStyle textStyle2">Select your preferred drop-off time and date.</p>
		<div class="selection selection1">
			<input class="selectionInput" type="text" name="dateFrom" id="dateToSub" bind:value={$dateTo} placeholder="Choose Drop Off Time" />
		</div>
	</div>
	<div class="hwImg">
		<img class="boxHIWImg" src="/images/how-it-works-images/how-it-works-3.webp" alt="Choose Drop Off Time image" />
	</div>
</div>

<div class="hiwCommon selectVehicle hiwCommon2">
	<div class="hwImg"><img class="boxHIWImg" src="/images/how-it-works-images/how-it-works-4.webp" alt="Vehicle Selection for rental service image" /></div>

	<div class="hiwText">
		<h2 class="textStyle">4. Select Vehicle</h2>
		<p class="textStyle pTextStyle">Choose your preferred vehicle from our extensive fleet.</p>
		<div class="selection selection2">
			<select class="selectionInput" id="location" name="location" bind:value={$VehicleId}>
				<option value="Select Vehicle">SELECT VEHICLE</option>

				{#each allBikes as bikes}
					<option value={bikes._id}>
						{bikes.brandName.toUpperCase()}
						{bikes.modelName.toUpperCase()}
					</option>
				{/each}
			</select>
		</div>
	</div>
</div>

<div class="hiwCommon rideYourHeartsOut hiwCommon1">
	<div class="hiwText">
		<h2 class="textStyle textStyle2">5. Ride Your Heart's Out</h2>
		<p class="textStyle pTextStyle textStyle2">Enjoy your ride and explore the beauty of Goa.</p>
		<div class="selection selection1">
			<button class="goToSelectionProcessBtn" on:click={goToSelectionProcss}>
				<p class="fifthGoTo">🛵 GO TO SELECTION PROCESS 💨</p>
			</button>
		</div>
	</div>
	<div class="hwImg"><img class="boxHIWImg" src="/images/how-it-works-images/how-it-works-5.webp" alt="Ride your heart's out image" /></div>
</div>

<style>
	.fifthGoTo {
		font-weight: 900;
	}
	.selection {
		width: 90%;
		display: flex;
		align-items: center;
		margin-top: 4px;
	}
	.selection1 {
		justify-content: end;
	}
	.selection2 {
		justify-content: start;
	}
	.boxHIWImg {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.goToSelectionProcessBtn {
		background-color: #fff;
		box-shadow: var(--boxShadows);
		border: none;
		border-radius: 10px;
		padding: 5px 10px;
		transition: 0.3s;
	}
	.goToSelectionProcessBtn:hover {
		background-color: var(--primary);
		box-shadow: var(--boxShadows);
	}

	.goToSelectionProcessBtn > h2 {
		text-align: center;
		color: #000;
		/* text-shadow: var(--boxShadows); */
	}
	.pTextStyle {
		color: #444;
		opacity: 0.8;
		font-weight: 100;
	}
	.textStyle {
		width: 90%;
	}
	.textStyle2 {
		text-align: end;
	}

	.hwImg {
		width: 30%;
		height: 100%;
	}
	.hiwText {
		width: 70%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.hiwCommon {
		height: 200px;
		overflow: hidden;
		position: relative;

		display: flex;
		justify-content: start;
		align-items: center;
	}
	.hiwCommon2 {
		justify-content: end;
	}
	.headerMain {
		text-align: center;
	}

	@media (max-width: 768px) {
		.selection2,
		.selection1 {
			justify-content: start;
		}
		.textStyle2 {
			text-align: start;
		}

		.hiwCommon1 {
			justify-content: end;
			flex-direction: row-reverse;
		}
	}

	/* SP */

	.selectionInput {
		margin: 0;
		padding: 12px 15px;
		width: 200px;
		margin-left: 20px;
		border: none;
		border-radius: 10px;
		/* width: 100%; */

		margin: 7px 0;

		color: #000;
		background-color: #fff9;
		box-shadow: var(--boxInsetShadows);

		font-weight: 500;
	}
	.selectionInput::placeholder {
		color: #000;
		text-transform: uppercase;
	}
</style>

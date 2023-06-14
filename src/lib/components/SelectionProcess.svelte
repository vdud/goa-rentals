<script lang="ts">
	import { dateFrom, dateTo } from '../stores/bookingStore';

	// import { dateFrom, dateTo } from '$lib/stores/bookingStore';
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

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

	const searchVehicle = () => {
		console.log($dateFrom);
		console.log($dateTo);
	};

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
			maxDate: new Date().fp_incr(14)
		});
	});
</script>

<div class="backdropImage">
	<div class="gradientTopBtm" />
	<img
		class="imageGoaRentalsWide"
		src="/images/goa-rentals-insta-{RndmImg}.0.1.webp"
		alt="Biker gang of Goa"
	/>
</div>

<div class="selectionProcess">
	<div class="selectionContent">
		<div class="inputContent selectLocation">
			<select class="selectionInput" id="location" name="location">
				{#each selectLocation as location}
					<option value={location}>{location.toUpperCase()}</option>
				{/each}
			</select>
		</div>
	</div>

	<!-- <div class="selectDateTime"> -->
	<div class="selectionContent">
		<div class="inputContent pickUp">
			<input
				class="selectionInput"
				type="text"
				name="datetime"
				id="dateFrom"
				bind:value={$dateFrom}
				placeholder="Choose Date and Time"
			/>
		</div>
	</div>
	<div class="selectionContent">
		<div class="inputContent dropOff">
			<input
				class="selectionInput"
				type="text"
				name="datetime"
				id="dateTo"
				bind:value={$dateTo}
				placeholder="Choose Date and Time"
			/>
		</div>
	</div>

	<div class="selectionContent">
		<div class="inputContent searchVehicleButton">
			<button class="selectionInput" on:click={searchVehicle}>Search Vehicle Near You</button>
		</div>
	</div>
</div>

<style>
	.gradientTopBtm {
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, #0000 75%, #eee 99%),
			linear-gradient(0deg, #0000 75%, #eee 99%);
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
	.inputContent {
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.selectionInput {
		margin: 0;
		padding: 12px 15px;
		width: fit-content;
		margin-left: 20px;
		border: none;
		border-radius: 5px;
		width: 100%;
		margin: 7px 0;
	}

	.selectionContent {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.selectionProcess {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		margin: 2rem 15vw;
		width: calc(100% - 30vw);
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(3px);
		background-color: #0000;
		box-shadow: var(--boxShadows);
		border-radius: 1rem;
		border-bottom: 1px solid #fff5;
		padding: 7px 0;

		position: relative;

		overflow: hidden;
	}
</style>

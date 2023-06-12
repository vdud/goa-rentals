<script lang="ts">
	import { dateFrom, dateTo } from '../stores/bookingStore';

	// import { dateFrom, dateTo } from '$lib/stores/bookingStore';
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	const selectLocation = [
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

	onMount(() => {
		flatpickr('#dateFrom', {
			enableTime: true,
			dateFormat: 'd-m-Y H:i',
			minDate: 'today',
			maxDate: new Date().fp_incr(14)
		});
		flatpickr('#dateTo', {
			enableTime: true,
			dateFormat: 'd-m-Y H:i',
			minDate: 'today',
			maxDate: new Date().fp_incr(14)
		});
	});
</script>

<div class="selectLocation">
	<select id="cars" name="cars">
		{#each selectLocation as location}
			<option value={location}>{location.toUpperCase()}</option>
		{/each}
	</select>
</div>

<div class="selectDateTime">
	<div class="pickUp">
		<input
			type="text"
			name="datetime"
			id="dateFrom"
			bind:value={$dateFrom}
			placeholder="Choose Date and Time"
		/>
	</div>
	<div class="dropOff">
		<input
			type="text"
			name="datetime"
			id="dateTo"
			bind:value={$dateTo}
			placeholder="Choose Date and Time"
		/>
	</div>
</div>

<div class="searchVehicleButton">
	<button on:click={searchVehicle}>Search Vehicle</button>
</div>

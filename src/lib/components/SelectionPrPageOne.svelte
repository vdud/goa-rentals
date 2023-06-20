<script lang="ts">
	import { VehicleName, dateFrom, dateTo, PickupLocation } from '$lib/stores/bookingStore';

	export let allBikes: any[];

	console.log('allBikes', allBikes);

	const searchVehicle = () => {
		console.log($dateFrom);
		console.log($dateTo);
	};

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

	export let letsGo: any;
</script>

<div class="selectionContent">
	<div class="inputContent selectLocation">
		<select class="selectionInput" id="location" name="location" bind:value={$PickupLocation}>
			{#each selectLocation as location}
				<option value={location}>{location.toUpperCase()}</option>
			{/each}
		</select>
	</div>
</div>

<div class="selectionContent">
	<div class="inputContent pickUp">
		<input class="selectionInput" type="text" name="dateFrom" id="dateFrom" bind:value={$dateFrom} placeholder="Choose Pick Up Time" />
	</div>
</div>
<div class="selectionContent">
	<div class="inputContent dropOff">
		<input class="selectionInput" type="text" name="dateTo" id="dateTo" bind:value={$dateTo} placeholder="Choose Drop Off Time" />
	</div>
</div>

<div class="selectionContent">
	<div class="inputContent selectVehicle">
		<select class="selectionInput" id="location" name="location" bind:value={$VehicleName}>
			<option value="Select Vehicle">SELECT VEHICLE</option>

			{#each allBikes as bikes}
				<option value="{bikes.brandName} {bikes.modelName}">
					{bikes.brandName.toUpperCase()}
					{bikes.modelName.toUpperCase()}
				</option>
			{/each}
		</select>
	</div>
</div>

<div class="selectionContent">
	<div class="inputContent searchVehicleButton">
		<button on:click={letsGo} class="selectionInput letsGo" on:click={searchVehicle}>Let's Go ➡</button>
	</div>
</div>

<style>
	form {
		width: 100%;
	}
	.selectionContent {
		display: flex;
		justify-content: space-around;
		width: 100%;
	}
	.searchVehicleButton {
		display: flex;
		justify-content: end;
		align-items: center;
	}
	.letsGo {
		width: fit-content;
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

		color: #fff;
		background-color: #0009;
		box-shadow: var(--boxShadows), var(--boxInsetShadows);

		font-weight: 500;
	}
	.selectionInput::placeholder {
		color: #fff;
		text-transform: uppercase;
	}
</style>

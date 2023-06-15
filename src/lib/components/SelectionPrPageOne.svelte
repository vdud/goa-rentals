<script lang="ts">
	import { dateFrom, dateTo } from '$lib/stores/bookingStore';

	export let allBikes: any[];

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

<div class="inputContent selectLocation">
	<select class="selectionInput" id="location" name="location">
		{#each selectLocation as location}
			<option value={location}>{location.toUpperCase()}</option>
		{/each}
	</select>
</div>

<div class="selectionContent">
	<div class="inputContent pickUp">
		<input
			class="selectionInput"
			type="text"
			name="datetime"
			id="dateFrom"
			bind:value={$dateFrom}
			placeholder="Choose Pick Up Time"
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
			placeholder="Choose Drop Off Time"
		/>
	</div>
</div>

<div class="selectionContent">
	<div class="inputContent selectVehicle">
		<select class="selectionInput" id="location" name="location">
			{#each allBikes as bikes}
				<option value="{bikes.BrandName} {bikes.VehicleName}">
					{bikes.BrandName.toUpperCase()}
					{bikes.VehicleName.toUpperCase()}
				</option>
			{/each}
		</select>
	</div>
</div>

<div class="selectionContent">
	<div class="inputContent searchVehicleButton">
		<button on:click={letsGo} class="selectionInput letsGo" on:click={searchVehicle}
			>Let's Go ➡</button
		>
	</div>
</div>

<style>
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

	.selectionProcess {
		flex-direction: column;
		justify-content: space-around;

		margin: 2rem 15vw;

		height: 90%;

		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;

		border-bottom: 1px solid #fff5;

		padding: 7px 0;

		transition: transform 0.5s ease-in-out;
	}
</style>

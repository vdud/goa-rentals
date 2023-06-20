<script lang="ts">
	import AllBikeSlot from './AllBikeSlot.svelte';

	export let allBikes: any[];
</script>

<h2>All Bikes</h2>
<div class="allBikes">
	<div class="allBikesContainer">
		{#each allBikes as { brandName, rent, modelName, image }, i}
			<div class="bike">
				<AllBikeSlot {brandName} {rent} {modelName} {image} {i} />
			</div>
		{/each}
	</div>
</div>

<style>
	h2 {
		text-align: center;
	}
	.allBikesContainer {
		width: fit-content;
		display: flex;
		padding-right: 20px;
	}
	.allBikes {
		width: 100%;
		overflow: hidden;
		overflow-x: scroll;
	}
	.bike {
		height: 70vh;
		width: 300px;
		margin: 20px;
		margin-right: 0;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* justify-content: center; */
		align-items: center;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: var(--boxShadows);

		position: relative;
		transition: 0.3s ease-in-out;
	}
	/* .bike:hover {
		background-color: #c12929;
	} */
</style>

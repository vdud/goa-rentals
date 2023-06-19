<script lang="ts">
	import AllBikeSlot from '$lib/components/AllBikeSlot.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const dataBody = JSON.parse(data.body);

	const allBikes = dataBody.allBikes;
</script>

<br />
<div class="grid">
	{#each allBikes as { BrandName, Price, VehicleName, image }, i}
		<div class="box">
			<div class="boxContent">
				<AllBikeSlot {BrandName} {Price} {VehicleName} {image} {i} />
			</div>
		</div>
	{/each}
</div>
<br />

<style>
	:root {
		--boxWidth: 230px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--boxWidth), 1fr));
		gap: 20px;
		row-gap: 20px;
		width: 100%;
		margin: 0%;
	}
	.box {
		width: var(--boxWidth);
		height: calc(var(--boxWidth) * 1.5);

		display: flex;
		justify-content: center;
		align-items: center;
	}
	.boxContent {
		width: 90%;
		height: 90%;
		background-color: #eee;
		box-shadow: var(--boxShadowsBlur);
		border-radius: 15px;
		position: relative;
		overflow: hidden;
		transition: 0.3s;
	}
	.boxContent:hover {
		transform: scale(1.1);
	}
</style>

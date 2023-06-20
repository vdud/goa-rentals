<script lang="ts">
	import AllBikeSlot from '$lib/components/AllBikeSlot.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const dataBody = JSON.parse(data.body);

	let allBikes: any[] = dataBody.allBikes;
	let value: any;
</script>

<br />

<div class="grid">
	{#each allBikes as { brandName, rent, modelName, image }, i}
		<div class="box">
			<div class="boxContent">
				<AllBikeSlot {brandName} {rent} {modelName} {image} {i} />
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
		box-shadow: var(--boxShadowsBlur);
		border-radius: 15px;

		position: relative;
		overflow: hidden;
		transition: 0.3s;
	}
	.boxContent:hover {
		transform: scale(1.03);
	}
</style>

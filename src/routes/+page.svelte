<script lang="ts">
	import AboutUs from '$lib/components/AboutUs.svelte';
	import AsuredServices from '$lib/components/AsuredServices.svelte';
	import BikeSneakPeek from '$lib/components/BikeSneakPeek.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import LoveItRideItComeAgain from '$lib/components/LoveItRideItComeAgain.svelte';

	import SelectionProcess from '$lib/components/SelectionProcess.svelte';
	import WhyBikeRentals from '$lib/components/WhyBikeRentals.svelte';

	import type { PageData } from './$types';
	export let data: PageData;

	const dataBody = JSON.parse(data.body);

	const allBikes = dataBody.allBikes;
	console.log('allBikes', allBikes);
</script>

<div class="selectionProcess">
	<SelectionProcess {allBikes} />
</div>

<div class="whyBikeRental">
	<WhyBikeRentals />
</div>

<div class="aaaServices">
	<AsuredServices />
</div>

<div class="allBikes">
	<BikeSneakPeek {allBikes} />
</div>

<div class="aboutUs">
	<AboutUs />
</div>

<div class="howItWorks">
	<HowItWorks {allBikes} />
</div>

<div class="loveItRideIt">
	<LoveItRideItComeAgain />
</div>

<style>
	.aaaServices {
		display: flex;
		justify-content: space-around;
	}
	.selectionProcess {
		overflow: hidden;
		position: relative;
		height: 400px;

		display: flex;
		justify-content: center;
		align-items: end;
		flex-direction: column;
	}
</style>

<script lang="ts">
	export let allBikes: any[];
</script>

<h2>All Bikes</h2>
<div class="allBikesContainer">
	{#each allBikes as { BrandName, Price, VehicleName, image }}
		<div class="bike">
			<!-- {#if image}
                    <img src={image} alt={BrandName} />
                {:else}{/if} -->
			<div class="bikeName">
				<p>{BrandName} {VehicleName}</p>
			</div>
			<div class="bikePrice">
				<p>₹{Price}/day</p>
			</div>
		</div>
	{/each}
</div>

<script lang="ts">
	export let allBikes: any[];
</script>

<h2>All Bikes</h2>
<div class="allBikes">
	<div class="allBikesContainer">
		{#each allBikes as { BrandName, Price, VehicleName, image }, i}
			<div class="bike">
				<div class="imgContainer">
					<img class="imgMain" src={image} alt="{VehicleName} by {BrandName} {i + 1}" />
				</div>
				<div class="brandName">
					<p class="lightSpan">
						<span class="boldSpan">Brand: </span>
						{BrandName.toUpperCase()}
					</p>
					<p class="lightSpan">
						<span class="boldSpan">Vehicle: </span>
						{VehicleName.toUpperCase()}
					</p>
				</div>
				<div class="bottomLinks">
					<p class="lightSpan">
						<span class="boldSpan">Price: </span>
						{Price}
					</p>
					<a href="/bikes/{BrandName}/{VehicleName}">
						<button class="btn btn-primary">View</button>
					</a>
				</div>
				<div class="brandName" />
			</div>
		{/each}
	</div>
</div>

<style>
	.lightSpan,
	.boldSpan {
		color: #fff;
	}
	.brandName {
		width: fit-content;
	}
	h2 {
		text-align: center;
	}
	.imgMain {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.imgContainer {
		width: 100%;
		height: 200px;
		overflow: hidden;
	}
	.bike {
		height: 360px;
		width: 300px;
		margin-left: 20px;
		margin-top: 20px;

		background-color: #000;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		/* justify-content: center; */
		align-items: center;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: var(--boxShadows);

		position: relative;
	}
	.allBikesContainer {
		width: fit-content;
		display: flex;
		padding-right: 20px;
	}
	.allBikes {
		width: 100%;
		height: 400px;
		overflow: hidden;
		overflow-x: scroll;
	}
</style>

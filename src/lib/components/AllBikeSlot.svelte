<script lang="ts">
	// BrandName, Price, VehicleName, image

	export let brandName: string;
	export let rent: string;
	export let modelName: string;
	export let image: string;
	export let i: number;
</script>

<div class="topLinks">
	<button class="btn btnTop"> Hello </button>
	<button class="btn btnTop"> Hello </button>
</div>
<div class="imgContainer">
	<img class="imgMain" src={image} alt="{modelName} by {brandName} {i + 1}" />
</div>
<div class="brandTextItems">
	<div class="gradFromBtm" />
	<div class="brandName">
		<p class="lightSpan">
			<span class="boldSpan">Brand: </span>
			{brandName.toUpperCase()}
		</p>
		<p class="lightSpan">
			<span class="boldSpan">Vehicle: </span>
			{modelName.toUpperCase()}
		</p>
	</div>
	<div class="bottomLinks">
		<p class="lightSpan">
			<span class="boldSpan">Price: </span>

			{rent}
		</p>
		<a href="/bikes/{brandName}/{modelName}">
			<button class="btn btn-primary">View</button>
		</a>
	</div>
</div>

<style>
	.gradFromBtm {
		width: 100%;
		height: 40px;
		/* background: linear-gradient(to top, var(--secondary), #0000); */
		position: absolute;
		background-color: transparent;
		bottom: 0;
		left: 0;
	}
	.btnTop {
		background-color: var(--primary);
		border: none;
		padding: 5px 10px;
		border-radius: 5px;
		box-shadow: var(--boxShadows);
	}
	.btn {
		background-color: var(--primary);
		border: none;
		padding: 5px 10px;
		border-radius: 5px;
		box-shadow: var(--boxShadows);
		transition: 0.3s;
	}
	.btn:hover {
		background-color: var(--tertiary);
	}
	p,
	span {
		color: #000;
	}
	.boxTop {
		width: fit-content;
		padding: 0 10px;
		background-color: var(--tertiary);

		border-radius: 15px;
		box-shadow: var(--boxShadows);
	}
	.topLinks {
		width: 90%;
		margin: 0 5%;
		height: 3rem;
		position: absolute;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	/* .boxTop {
		width: 100%;
		height: 100%;
		background-color: #444;
		display: flex;
		justify-content: center;
		align-items: center;
	} */
	.bottomLinks {
		position: absolute;
		bottom: 0;
		background-color: var(--primary);
		box-shadow: var(--boxShadows);
		border-radius: 10px;
		left: 0;
		width: 80%;
		padding: 5%;
		margin: 5%;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.brandTextItems {
		height: 40%;
		width: 100%;

		/* padding: 5%; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		background-color: var(--primary);
	}
	.brandName {
		width: 100%;
		text-align: center;
		padding-top: 5%;
		/* background-color: var(--secondary); */
	}

	.imgMain {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.imgContainer {
		width: 100%;
		height: 60%;
		overflow: hidden;
	}
</style>

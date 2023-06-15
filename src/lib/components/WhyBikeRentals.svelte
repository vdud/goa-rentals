<script lang="ts">
	const showMore = () => {
		const whyRentalsBox = document.getElementById('whyRentalsBox') as HTMLDivElement;
		const moreInfoBox = document.getElementById('moreInfoBox') as HTMLDivElement;
		whyRentalsBox.style.height = 'auto';
		moreInfoBox.style.display = 'none';
	};
</script>

<div class="whyRentals" id="whyRentalsBox">
	<div class="moreInfo" id="moreInfoBox">
		<button on:click={showMore} class="showMore">
			<p class="readMore">READ MORE</p>
		</button>
	</div>

	<h2>Why Bike/Scooty Rentals?</h2>
	<p>
		There are several reasons why choosing a bike or scooty rental for travel in a coastal area can
		be advantageous:
	</p>
	<ul>
		<li>
			<strong>Flexibility:</strong> Bikes and scooties provide greater flexibility in exploring coastal
			areas compared to other modes of transportation. They are nimble and can navigate through narrow
			roads, allowing you to easily reach scenic spots, hidden beaches, and local attractions that might
			be inaccessible to larger vehicles.
		</li>
		<li>
			<strong>Cost-effective:</strong> Renting a bike or scooty is generally more cost-effective than
			hiring a car or relying on public transportation. It can be a budget-friendly option, especially
			for solo travelers or small groups. Additionally, they consume less fuel, which can help save on
			expenses.
		</li>
		<li>
			<strong>Enjoyment of the scenery:</strong> Riding a bike or scooty allows you to fully immerse
			yourself in the coastal environment and enjoy the scenic beauty. You can feel the cool breeze,
			listen to the crashing waves, and take in the breathtaking coastal views as you ride along the
			shoreline.
		</li>
		<li>
			<strong>Parking convenience:</strong> Finding parking spaces for bikes or scooties is usually easier
			compared to larger vehicles. Coastal areas can be crowded, especially during peak tourist seasons,
			and having a smaller mode of transport gives you an advantage in finding parking spots near popular
			attractions or beachfront areas.
		</li>
		<li>
			<strong>Local exploration:</strong> Bikes and scooties enable you to explore coastal areas at a
			leisurely pace, giving you the opportunity to discover hidden gems, small coastal villages, and
			local eateries. You can easily stop whenever something catches your eye, allowing for a more immersive
			and personalized travel experience.
		</li>
		<li>
			<strong>Environmental friendliness:</strong> Choosing a bike or scooty rental contributes to reducing
			your carbon footprint. They produce fewer emissions compared to cars, making them a more environmentally
			friendly mode of transportation. It's a way to enjoy the coastal beauty while being mindful of
			the environment.
		</li>
		<li>
			<strong>Health and well-being:</strong> Riding a bike or scooty is a physically active mode of
			transportation that can benefit your health and well-being. Coastal areas often have pleasant weather
			and scenic routes, providing an enjoyable opportunity for exercise and outdoor activities.
		</li>
	</ul>
</div>

<style>
	.readMore {
		font-weight: 600;
		color: #fff;
		background-color: #888;
		padding: 3px 10px;
		border-radius: 5px;
		box-shadow: var(--boxShadows);
	}
	.showMore {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: end;
		background: linear-gradient(180deg, #eee0 0%, #eee 100%);
	}
	.moreInfo {
		position: absolute;
		width: 100%;
		height: 60px;
		bottom: 0;
		left: 0;
	}
	h2 {
		text-align: center;
	}
	.whyRentals {
		margin: 0 auto;
		width: 80%;

		height: 200px;
		overflow: hidden;
		position: relative;
	}
</style>

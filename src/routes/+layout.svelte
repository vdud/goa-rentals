<script lang="ts">
	import '$lib/assets/app.css';
	import { dateFrom, dateTo } from '$lib/stores/bookingStore';
	import flatpickr from 'flatpickr';
	import { onMount } from 'svelte';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
	const dataBody = JSON.parse(data.body);
	const allBikes = dataBody.allBikes;
	const allBlogs = dataBody.allBlogs;

	const selectLocation = [
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

	onMount(() => {
		flatpickr('#dateFrom', {
			enableTime: true,
			dateFormat: 'd-m-Y H:i',
			minDate: 'today',
			maxDate: new Date().fp_incr(14)
		});
		flatpickr('#dateTo', {
			enableTime: true,
			dateFormat: 'd-m-Y H:i',
			minDate: 'today',
			maxDate: new Date().fp_incr(14)
		});
	});

	const searchVehicle = () => {
		console.log($dateFrom);
		console.log($dateTo);
	};
</script>

<div class="Nav contactNav">
	<div class="contactNumber">
		<p>Contact Number: +91 8700088011</p>
	</div>
	<div class="eMail">
		<p>eMail: varundudeja96@gmail.com</p>
	</div>
</div>

<div class="Nav mainNav">
	<a href="/vehicles">Vehicles</a>
	<a href="/must-visit-places">Must Visit Places in Goa</a>
	<a href="/how-it-works">How it Works?</a>
	<a href="/blog">Blog</a>
	<a href="/contact">Contact Us</a>
</div>

<div class="selectionProcess">
	<div class="selectLocation">
		<select id="cars" name="cars">
			{#each selectLocation as location}
				<option value={location}>{location.toUpperCase()}</option>
			{/each}
		</select>
	</div>

	<div class="selectDateTime">
		<div class="pickUp">
			<input
				type="text"
				name="datetime"
				id="dateFrom"
				bind:value={$dateFrom}
				placeholder="Choose Date and Time"
			/>
		</div>
		<div class="dropOff">
			<input
				type="text"
				name="datetime"
				id="dateTo"
				bind:value={$dateTo}
				placeholder="Choose Date and Time"
			/>
		</div>
	</div>

	<div class="searchVehicleButton">
		<button on:click={searchVehicle}>Search Vehicle</button>
	</div>

	<div class="whyBikeRental">
		<h2>Why Bike/Scooty Rentals?</h2>
		<p>
			There are several reasons why choosing a bike or scooty rental for travel in a coastal area
			can be advantageous:
		</p>
		<!-- Points -->
		<ul>
			<li>
				<strong>Flexibility:</strong> Bikes and scooties provide greater flexibility in exploring coastal
				areas compared to other modes of transportation. They are nimble and can navigate through narrow
				roads, allowing you to easily reach scenic spots, hidden beaches, and local attractions that
				might be inaccessible to larger vehicles.
			</li>
			<li>
				<strong>Cost-effective:</strong> Renting a bike or scooty is generally more cost-effective than
				hiring a car or relying on public transportation. It can be a budget-friendly option, especially
				for solo travelers or small groups. Additionally, they consume less fuel, which can help save
				on expenses.
			</li>
			<li>
				<strong>Enjoyment of the scenery:</strong> Riding a bike or scooty allows you to fully immerse
				yourself in the coastal environment and enjoy the scenic beauty. You can feel the cool breeze,
				listen to the crashing waves, and take in the breathtaking coastal views as you ride along the
				shoreline.
			</li>
			<li>
				<strong>Parking convenience:</strong> Finding parking spaces for bikes or scooties is usually
				easier compared to larger vehicles. Coastal areas can be crowded, especially during peak tourist
				seasons, and having a smaller mode of transport gives you an advantage in finding parking spots
				near popular attractions or beachfront areas.
			</li>
			<li>
				<strong>Local exploration:</strong> Bikes and scooties enable you to explore coastal areas at
				a leisurely pace, giving you the opportunity to discover hidden gems, small coastal villages,
				and local eateries. You can easily stop whenever something catches your eye, allowing for a more
				immersive and personalized travel experience.
			</li>
			<li>
				<strong>Environmental friendliness:</strong> Choosing a bike or scooty rental contributes to
				reducing your carbon footprint. They produce fewer emissions compared to cars, making them a
				more environmentally friendly mode of transportation. It's a way to enjoy the coastal beauty
				while being mindful of the environment.
			</li>
			<li>
				<strong>Health and well-being:</strong> Riding a bike or scooty is a physically active mode of
				transportation that can benefit your health and well-being. Coastal areas often have pleasant
				weather and scenic routes, providing an enjoyable opportunity for exercise and outdoor activities.
			</li>
		</ul>
	</div>

	<div class="aaaServices">
		<div class="assuredBikes">
			<p>
				<span>Assured</span> Bikes
			</p>
		</div>
		<div class="affordablePrices">
			<p>
				<span>Affordable</span> Prices
			</p>
		</div>
		<div class="atTheDoor">
			<p>
				<span>At the Door</span> Delivery
			</p>
		</div>
	</div>

	<div class="allBikes">
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
	</div>

	<div class="aboutUs">
		<h2>About Us</h2>
		<p>
			Welcome to Goa Rentals, your trusted web app based in the vibrant coastal state of Goa, India.
			We are your go-to destination for all your bike and scooty rental needs, offering a wide
			selection of vehicles available for daily, weekly, monthly, and yearly rentals.
		</p>
		<p>
			At Goa Rentals, we understand the essence of exploration and the freedom it brings. Our
			mission is to provide you with reliable, convenient, and affordable transportation options,
			allowing you to fully immerse yourself in the stunning beauty of Goa at your own pace.
		</p>
		<p>
			We take pride in our extensive fleet of bikes and scooties, carefully curated to cater to
			every individual's preferences and requirements. Whether you seek the thrill of a powerful
			bike or the ease and maneuverability of a scooty, we have the perfect ride for you. Our
			vehicles are regularly maintained to ensure optimal performance, giving you a smooth and
			enjoyable experience throughout your rental period.
		</p>
		<p>
			Convenience is at the core of our services. With our user-friendly web app, you can easily
			browse through our inventory, select your desired vehicle, and book it with just a few clicks.
			Our seamless reservation process and efficient customer support ensure that your rental
			experience with us is hassle-free from start to finish.
		</p>
		<p>
			We prioritize your safety and well-being. All our bikes and scooties undergo rigorous
			inspections to meet the highest safety standards, and we provide helmets for your protection.
			Our team is dedicated to delivering exceptional customer service, assisting you with any
			queries or concerns you may have during your rental period.
		</p>
		<p>
			Whether you're a solo traveler seeking solitude on Goa's pristine beaches, a group of friends
			looking for an exhilarating coastal adventure, or a family in search of memorable experiences,
			Goa Rentals is here to cater to all your travel needs. We believe that every journey should be
			filled with unforgettable moments, and we are committed to making your time in Goa truly
			remarkable.
		</p>
		<p>
			Choose Goa Rentals for a reliable, flexible, and unforgettable two-wheeler rental experience.
			Let us be your trusted companion as you explore the picturesque landscapes, embrace the
			vibrant culture, and create lifelong memories in the captivating paradise of Goa.
		</p>
	</div>

	<div class="howItWorks">
		<h1>How it Works?</h1>
		<div class="selectLocation">
			<h2>1. Select Location</h2>
			<p>Choose your preferred location and select your desired vehicle.</p>
		</div>

		<div class="choosePickupAndDropOffTime">
			<h2>2. Choose Pickup and Drop-off Time</h2>
			<p>Select your preferred pickup and drop-off time and date.</p>
		</div>

		<div class="selectVehicle">
			<h2>3. Select Vehicle</h2>
			<p>Choose your preferred vehicle from our extensive fleet.</p>
		</div>

		<div class="rideYourHeartsOut">
			<h2>4. Ride Your Heart's Out</h2>
			<p>Enjoy your ride and explore the beauty of Goa.</p>
		</div>
	</div>

	<div class="loveItRideIt">
		<h1>Love it? Ride it! Come Again</h1>
		<p>
			The sun-kissed beaches, swaying palm trees, and the enchanting coastal allure of Goa, India,
			beckon travelers from around the world. Known for its vibrant culture, laid-back vibes, and
			breathtaking landscapes, Goa offers a unique blend of relaxation and adventure. While there
			are numerous ways to explore this coastal paradise, none quite capture the essence of freedom
			and excitement like riding a bike or scooty. With Goa Rentals, your trusted two-wheeler rental
			partner, you can embrace the spirit of Goa and create unforgettable memories that will make
			you yearn for more.
		</p>
		<h2>Unleash the Spirit of Goa:</h2>
		<p>
			When it comes to experiencing the true essence of Goa, nothing compares to the exhilaration of
			riding through its winding roads and picturesque coastal stretches. Feel the warm breeze on
			your face as you cruise along the coastline, discovering hidden gems and soaking in the
			vibrant surroundings. Goa's diverse landscape offers something for everyone, from the tranquil
			shores of Palolem to the bustling streets of Panjim. With a bike or scooty from Goa Rentals,
			you have the freedom to explore it all at your own pace.
		</p>

		<h2>Endless Possibilities:</h2>
		<p>
			Whether you're a solo traveler seeking solitude, a group of friends looking for adventure, or
			a couple on a romantic getaway, Goa has something to offer. With Goa Rentals' wide range of
			bikes and scooties available for daily, weekly, monthly, or even yearly rentals, you can
			choose the perfect ride that suits your preferences and requirements. Feel the thrill of a
			powerful bike as you navigate the winding roads of the Western Ghats or opt for a scooty to
			effortlessly maneuver through Goa's vibrant streets. The possibilities are endless, and the
			choice is yours.
		</p>

		<h2>Convenience and Reliability:</h2>
		<p>
			Goa Rentals understands the importance of a seamless and hassle-free experience. Our
			user-friendly web app allows you to effortlessly browse through our extensive fleet, select
			your desired vehicle, and book it with just a few clicks. Our commitment to reliability means
			that all our bikes and scooties are regularly maintained, ensuring optimal performance and
			your safety throughout your rental period. With our efficient customer support team available
			to assist you, you can rest assured that your journey with Goa Rentals will be smooth and
			worry-free.
		</p>

		<h2>Memories that Last a Lifetime:</h2>
		<p>
			The allure of Goa is not just in its pristine beaches and vibrant nightlife but also in the
			memories created during your time here. Riding a bike or scooty allows you to immerse yourself
			in the local culture, discover hidden corners, and interact with the friendly locals. From
			savoring delectable Goan cuisine to exploring ancient temples and vibrant markets, every
			moment becomes an opportunity to create cherished memories. And when the time comes to bid
			farewell to Goa, you'll find yourself longing to return and relive those unforgettable
			experiences.
		</p>

		<h2>In The End,</h2>
		<p>
			In the captivating paradise of Goa, the call to explore and experience the magic of its
			coastal beauty is undeniable. With Goa Rentals as your trusted two-wheeler rental partner, you
			can embark on a journey of freedom, adventure, and discovery. Love the spirit of Goa? Ride
			through its vibrant streets, along its stunning coastlines, and create memories that will make
			you yearn for more. Whether you're a first-time visitor or a seasoned traveler, Goa Rentals
			invites you to embrace the thrill of the ride and come again to this enchanting coastal
			paradise.
		</p>
	</div>

	<div class="topBlogs">
		{#each allBlogs as blog}
			<div class="blog">
				<a href="blogs/{blog.slug}">
					<h1>{blog.articleName}</h1>
					<p>{blog.articleDescription}</p>
				</a>
			</div>
		{/each}
	</div>
</div>

<slot />

<style>
	.aaaServices {
		display: flex;
		justify-content: space-around;
	}
	.Nav {
		display: flex;
		justify-content: space-around;
	}

	.bike {
		background-color: rgb(50, 146, 71);
		margin-bottom: 10px;
	}
</style>

<script lang="ts">
	const readMore = () => {
		const loveItRideIt = document.getElementById('loveItRideIt') as HTMLDivElement;
		const showMoreLoveItRideIt = document.getElementById('showMoreLoveItRideIt') as HTMLDivElement;
		loveItRideIt.style.height = 'auto';
		showMoreLoveItRideIt.style.display = 'none';
	};
</script>

<div class="loveItRideIt" id="loveItRideIt">
	<button on:click={readMore} class="showMoreGradient" id="showMoreLoveItRideIt">
		<p class="readMore">READ MORE</p>
	</button>

	<h2 class="h2LoveItRideIt">Love it? Ride it! Come Again</h2>
	<br />

	<p>
		The sun-kissed beaches, swaying palm trees, and the enchanting coastal allure of Goa, India, beckon travelers from around the world. Known for its vibrant culture, laid-back vibes, and
		breathtaking landscapes, Goa offers a unique blend of relaxation and adventure. While there are numerous ways to explore this coastal paradise, none quite capture the essence of freedom and
		excitement like riding a bike or scooty. With Goa Rentals, your trusted two-wheeler rental partner, you can embrace the spirit of Goa and create unforgettable memories that will make you yearn for
		more.
	</p>
	<br />
	<h2>Unleash the Spirit of Goa:</h2>
	<p>
		When it comes to experiencing the true essence of Goa, nothing compares to the exhilaration of riding through its winding roads and picturesque coastal stretches. Feel the warm breeze on your face
		as you cruise along the coastline, discovering hidden gems and soaking in the vibrant surroundings. Goa's diverse landscape offers something for everyone, from the tranquil shores of Palolem to
		the bustling streets of Panjim. With a bike or scooty from Goa Rentals, you have the freedom to explore it all at your own pace.
	</p>
	<br />
	<h2>Endless Possibilities:</h2>
	<p>
		Whether you're a solo traveler seeking solitude, a group of friends looking for adventure, or a couple on a romantic getaway, Goa has something to offer. With Goa Rentals' wide range of bikes and
		scooties available for daily, weekly, monthly, or even yearly rentals, you can choose the perfect ride that suits your preferences and requirements. Feel the thrill of a powerful bike as you
		navigate the winding roads of the Western Ghats or opt for a scooty to effortlessly maneuver through Goa's vibrant streets. The possibilities are endless, and the choice is yours.
	</p>
	<br />
	<h2>Convenience and Reliability:</h2>
	<p>
		Goa Rentals understands the importance of a seamless and hassle-free experience. Our user-friendly web app allows you to effortlessly browse through our extensive fleet, select your desired
		vehicle, and book it with just a few clicks. Our commitment to reliability means that all our bikes and scooties are regularly maintained, ensuring optimal performance and your safety throughout
		your rental period. With our efficient customer support team available to assist you, you can rest assured that your journey with Goa Rentals will be smooth and worry-free.
	</p>
	<br />
	<h2>Memories that Last a Lifetime:</h2>
	<p>
		The allure of Goa is not just in its pristine beaches and vibrant nightlife but also in the memories created during your time here. Riding a bike or scooty allows you to immerse yourself in the
		local culture, discover hidden corners, and interact with the friendly locals. From savoring delectable Goan cuisine to exploring ancient temples and vibrant markets, every moment becomes an
		opportunity to create cherished memories. And when the time comes to bid farewell to Goa, you'll find yourself longing to return and relive those unforgettable experiences.
	</p>
	<br />
	<h2>In The End,</h2>
	<p>
		In the captivating paradise of Goa, the call to explore and experience the magic of its coastal beauty is undeniable. With Goa Rentals as your trusted two-wheeler rental partner, you can embark on
		a journey of freedom, adventure, and discovery. Love the spirit of Goa? Ride through its vibrant streets, along its stunning coastlines, and create memories that will make you yearn for more.
		Whether you're a first-time visitor or a seasoned traveler, Goa Rentals invites you to embrace the thrill of the ride and come again to this enchanting coastal paradise.
	</p>
</div>

<style>
	.h2LoveItRideIt {
		text-align: center;
		font-size: 1.8rem;
	}
	.loveItRideIt {
		margin: 10%;
		height: 200px;
		overflow: hidden;
		position: relative;
	}
</style>

<script lang="ts">
	const readMore = () => {
		const aboutUs = document.getElementById('aboutUs') as HTMLDivElement;
		const showMoreAbtUs = document.getElementById('showMoreAbtUs') as HTMLDivElement;
		aboutUs.style.height = 'auto';
		showMoreAbtUs.style.display = 'none';
	};
</script>

<div class="aboutUs" id="aboutUs">
	<button on:click={readMore} class="showMoreGradient" id="showMoreAbtUs">
		<p class="readMore">READ MORE</p>
	</button>
	<h2>About Us</h2>
	<br />
	<p>
		Welcome to Goa Rentals, your trusted web app based in the vibrant coastal state of Goa, India. We are your go-to destination for all your bike and scooty rental needs, offering a wide selection of
		vehicles available for daily, weekly, monthly, and yearly rentals.
	</p>
	<br />
	<p>
		At Goa Rentals, we understand the essence of exploration and the freedom it brings. Our mission is to provide you with reliable, convenient, and affordable transportation options, allowing you to
		fully immerse yourself in the stunning beauty of Goa at your own pace.
	</p>
	<br />
	<p>
		We take pride in our extensive fleet of bikes and scooties, carefully curated to cater to every individual's preferences and requirements. Whether you seek the thrill of a powerful bike or the
		ease and maneuverability of a scooty, we have the perfect ride for you. Our vehicles are regularly maintained to ensure optimal performance, giving you a smooth and enjoyable experience throughout
		your rental period.
	</p>
	<br />
	<p>
		Convenience is at the core of our services. With our user-friendly web app, you can easily browse through our inventory, select your desired vehicle, and book it with just a few clicks. Our
		seamless reservation process and efficient customer support ensure that your rental experience with us is hassle-free from start to finish.
	</p>
	<br />
	<p>
		We prioritize your safety and well-being. All our bikes and scooties undergo rigorous inspections to meet the highest safety standards, and we provide helmets for your protection. Our team is
		dedicated to delivering exceptional customer service, assisting you with any queries or concerns you may have during your rental period.
	</p>
	<br />
	<p>
		Whether you're a solo traveler seeking solitude on Goa's pristine beaches, a group of friends looking for an exhilarating coastal adventure, or a family in search of memorable experiences, Goa
		Rentals is here to cater to all your travel needs. We believe that every journey should be filled with unforgettable moments, and we are committed to making your time in Goa truly remarkable.
	</p>
	<br />
	<p>
		Choose Goa Rentals for a reliable, flexible, and unforgettable two-wheeler rental experience. Let us be your trusted companion as you explore the picturesque landscapes, embrace the vibrant
		culture, and create lifelong memories in the captivating paradise of Goa.
	</p>
	<br />
</div>

<style>
	/* .showMoreGradient {
		background: linear-gradient(#eee0, #eee);
		height: 50px;
		width: 100%;
		position: absolute;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	} */
	h2 {
		text-align: center;
	}
	.aboutUs {
		margin: 10%;
		height: 200px;
		overflow: hidden;
		position: relative;
	}
</style>

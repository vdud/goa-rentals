<div class="navFlexContainer">
	<a href="/" class="navContent">
		<img class="imgClass" src="/logo.webp" alt="Goa Rental Service Logo" />

		<h1 class="h2ClassSpans">
			<span class="spans span1">Goa</span>
			<span class="spans span2">Rentals</span>
		</h1>
	</a>

	<a href="/track-your-vehicle" class="trackYourVehicle">
		<i class="fa-solid fa-truck-fast" />
		<p class="TYVFa">TRACK YOUR VEHICLE</p>
	</a>
</div>

<style>
	.TYVFa {
		height: 3.5rem;

		text-align: center;
		font-weight: 200;
		font-size: 0.75rem;
		text-decoration: underline;
	}
	i {
		height: 3.5rem;
		display: flex;
		align-items: end;
		font-size: 2rem;
		justify-content: center;

		scale: 1;
	}
	.trackYourVehicle {
		width: 7rem;
		height: 7rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.navFlexContainer {
		display: flex;
		justify-content: space-between;
	}
	.imgClass {
		height: 7rem;
		width: 7rem;
		scale: 1;
		z-index: 1;
	}
	.navContent {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: fit-content;
	}
	.h2ClassSpans {
		display: flex;
		flex-direction: column;
		align-items: end;
		height: 7rem;
		width: fit-content;
		z-index: 2;
		transform: translateY(3px);
	}
	.spans {
		width: fit-content;
		font-family: Sand_Beach;
	}
	.span1 {
		font-size: calc(var(--fontMultiplier) * 3rem);
	}
	.span2 {
		font-size: calc(var(--fontMultiplier) * 1rem);
		/* padding-left: 30px; */
		transform: translateY(-18px);
	}
</style>

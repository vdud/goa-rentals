<script lang="ts">
</script>

<div class="windowForExtras">
	<div class="gradientRight" />
</div>
<div class="navDiv" id="selectionTopHeaderNav">
	<div class="navContents">
		<a class="navContent navContent2" href="/vehicles">Vehicles</a>
		<a class="navContent navContent3" href="/must-visit-places">Must Visit Places in Goa</a>
		<a class="navContent navContent4" href="/how-it-works">How it Works?</a>
		<a class="navContent navContent5" href="/blog">Blog</a>
		<a class="navContent navContent6" href="/contact">Contact Us</a>
	</div>
</div>

<style>
	a {
		margin: 0;
	}
	.windowForExtras {
		/* background-color: red; */
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 100;

		display: flex;
		pointer-events: none;
		align-items: center;
		justify-content: end;
		/* background-color: red; */
	}
	.gradientRight {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 100%;
		pointer-events: none;

		background: linear-gradient(90deg, #fff0 75%, #eee 100%);
	}

	.navDiv {
		align-items: center;
		/* width: fit-content; */
		width: 100%;
		height: 2rem;
		overflow: hidden;
		padding: 10px 0;
		overflow-x: scroll;
		position: relative;
		margin-bottom: 10px;
		/* background-color: var(--secOptDark); */
	}
	.navContents {
		width: max-content;
		padding-right: 100px;
		font-size: 0.8rem;
		margin-top: 0.5rem;
	}
	.navContent {
		width: fit-content;
		margin: 0 9px;
		background-color: #ddd;
		box-shadow: var(--boxShadows);
		padding: 5px 10px;
		/* font-size: 2rem; */
		border-radius: 5px;
		transition: 0.3s;
	}
	.navContent:hover {
		background-color: #fff;
		color: #000;
	}
</style>

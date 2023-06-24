<script lang="ts">
	const howItWorks = () => {
		setTimeout(() => {
			document.getElementById('howItWorks')!.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
		}, 100);
	};
	const goToBlogs = () => {
		setTimeout(() => {
			document.getElementById('goToBlogs')!.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
		}, 100);
	};
</script>

<div class="windowForExtras">
	<div class="gradientRight" />
</div>
<div class="navDiv" id="selectionTopHeaderNav">
	<div class="navContents">
		<a class="navContent navContent2" href="/vehicles">Vehicles</a>
		<a class="navContent navContent3" href="/blogs/must-visit-places-in-goa">Must Visit Places in Goa</a>
		<a on:click={howItWorks} class="navContent navContent4" href="/">How it Works?</a>
		<a on:click={goToBlogs} class="navContent navContent5" href="/">Blogs</a>
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

		display: flex;
	}
	.navContent {
		width: max-content;

		margin: 0 9px;
		background-color: #ddd;
		box-shadow: var(--boxShadows);
		padding: 5px 10px;
		/* font-size: 2rem; */
		border-radius: 5px;

		/* display: flex;
		align-items: center;
		justify-content: center; */

		transition: 0.3s;
	}
	.navContent:hover {
		background-color: #fff;
	}
</style>

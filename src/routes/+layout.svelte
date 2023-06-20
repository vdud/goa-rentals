<script lang="ts">
	import '$lib/assets/app.css';
	import '$lib/assets/prose.css';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	import Newsletter from '$lib/components/Newsletter.svelte';
	import TopAlertInfo from '$lib/components/TopAlertInfo.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import TopBlogs from '$lib/components/TopBlogs.svelte';

	import type { LayoutData } from './$types';
	import LogoImgNav from '$lib/components/LogoImgNav.svelte';
	import NewLogoImgNav from '$lib/components/NewLogoImgNav.svelte';
	export let data: LayoutData;
	const dataBody = JSON.parse(data.body);
	const allBlogs = dataBody.allBlogs;
</script>

<div class="main">
	<div class="Nav contactNav">
		<TopAlertInfo />
	</div>

	<div class="LogoImage">
		<LogoImgNav />
		<!-- <NewLogoImgNav /> -->
	</div>

	<div class="Nav mainNav">
		<Nav />
	</div>

	<slot />

	<div class="topBlogs">
		<TopBlogs {allBlogs} />
	</div>

	<div class="newsLeter">
		<Newsletter />
	</div>
</div>

<style>
	.Nav {
		position: relative;
	}
	.main {
		background-color: #eee;
		margin: 5px;
		width: clamp(300px, calc(100% - 12px), 1440px);
		border-radius: 5px;

		box-shadow: var(--boxShadowsBlur);
		border: 1px solid #fff;
	}
</style>

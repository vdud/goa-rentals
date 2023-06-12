<script lang="ts">
	import '$lib/assets/app.css';

	import Newsletter from '$lib/components/Newsletter.svelte';
	import TopAlertInfo from '$lib/components/TopAlertInfo.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import TopBlogs from '$lib/components/TopBlogs.svelte';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
	const dataBody = JSON.parse(data.body);
	const allBlogs = dataBody.allBlogs;
</script>

<div class="Nav contactNav">
	<TopAlertInfo />
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

<style>
	.Nav {
		display: flex;
		justify-content: space-around;
	}
</style>

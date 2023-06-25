<script lang="ts">
	import { fileUrl, postImage, siteName, siteUrl } from '$lib/api/config';

	export let data;
	let image = `${postImage}${encodeURIComponent(data.frontmatter.title)}.png`;
</script>

<svelte:head>
	<title>{data.frontmatter.title}</title>

	<meta content={data.frontmatter.description} name="description" />

	<meta content={data.frontmatter.title} property="og:title" />
	<meta content={image} property="og:image" />
	<meta content={siteUrl} property="og:url" />
	<meta content={data.frontmatter.description} property="og:description" />
	<meta content={siteName} property="og:site_name" />

	<!-- <meta content={twitterHandle} name="twitter:creator" /> -->
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={data.frontmatter.title} name="twitter:title" />
	<meta content={data.frontmatter.description} name="twitter:description" />
	<meta content={image} name="twitter:image" />
</svelte:head>

<div class="dataContent prose">
	{@html data.content}
</div>

<style>
	.prose {
		margin: 5px;
		width: 80%;
		margin-left: 10%;
		margin-bottom: 60px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>

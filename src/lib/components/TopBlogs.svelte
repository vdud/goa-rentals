<script lang="ts">
	export let allBlogs: any[];

	const first3Blogs = allBlogs.slice(0, 3);
	const restBlogs = allBlogs.slice(3);
</script>

{#each first3Blogs as blog}
	<div class="bigBlogs">
		<a href="/blogs/{blog.slug}">
			<h2>{blog.articleName}</h2>
			<p>{blog.articleDescription}</p>
		</a>
	</div>
{/each}

{#each restBlogs as blog}
	<div class="smallBlogs">
		<a href="/blogs/{blog.slug}">
			<h2>{blog.articleName}</h2>
			<p>{blog.articleDescription}</p>
		</a>
	</div>
{/each}

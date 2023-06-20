<script lang="ts">
	export let allBlogs: any[];

	const first3Blogs = allBlogs.slice(0, 3);
	const restBlogs = allBlogs.slice(0);
</script>

<h2 class="blogsHeader" id="goToBlogs">Top Blogs</h2>
{#each first3Blogs as blog, i}
	<a href="/blogs/{blog.slug}" class="bigBlogs">
		<h2 class="h2Blogs">{i + 1}. {blog.articleName}</h2>
		<p class="pBlogs">{blog.articleDescription}</p>
	</a>
{/each}

{#if restBlogs.length > 0}
	<h2 class="blogsHeader">More Blogs</h2>
	<div class="smallBlogs">
		{#each restBlogs as blog}
			<a href="/blogs/{blog.slug}" class="aSmallBlogs">
				<h2 class="h2Blogs">{blog.articleName}</h2>
				<p class="pBlogs">{blog.articleDescription}</p>
			</a>
		{/each}
	</div>
{/if}

<style>
	.h2Blogs {
		font-size: clamp(1.1rem, 2vw, 2rem);
	}
	.pBlogs {
		font-size: clamp(0.8rem, 2vw, 1.2rem);
	}
	.blogsHeader {
		text-align: center;
	}
	.aSmallBlogs {
		padding: 8px;
		border-radius: 5px;
		transition: background-color 0.3s ease-in-out;
	}
	.aSmallBlogs:hover {
		background-color: var(--primary);
	}
	.smallBlogs {
		display: flex;
		flex-direction: column;
		justify-content: center;

		background-color: #fff;
		margin: 20px 5px;
		padding: 30px 5px;
		border-radius: 5px;
		box-shadow: var(--boxShadows);
	}
	.bigBlogs {
		background-color: #fff;
		margin: 20px 5px;
		padding: 30px 13px;
		border-radius: 5px;
		box-shadow: var(--boxShadows);

		display: flex;
		flex-direction: column;
		justify-content: center;
		border-bottom: 0px solid var(--primary);
		transition: border-bottom 0.3s ease-in-out;
	}
	.bigBlogs:hover {
		border-bottom: 10px solid var(--primary);
	}

	h2 {
		font-size: clamp(1.5rem, 2vw, 2rem);
	}
</style>

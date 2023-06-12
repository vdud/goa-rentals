<script lang="ts">
	export let allBlogs: any[];
</script>

{#each allBlogs as blog}
	<div class="blog">
		<a href="blogs/{blog.slug}">
			<h2>{blog.articleName}</h2>
			<p>{blog.articleDescription}</p>
		</a>
	</div>
{/each}

import { postsUrl } from './config';
import { GH_TOKEN } from '$env/static/private';

import { markdownToHTML } from './markdown';
import type { PostMarkdownType } from '$lib/types';

const headers = {
	// GitHub suggests to include the API version
	Accept: 'application/vnd.github.v3+json',
	Authorization: `token ${GH_TOKEN}`
};

export async function getPost(slug: string): Promise<PostMarkdownType> {
	const postUrl = `${postsUrl}/${slug}/${slug}.md`;

	const response = await fetch(postUrl, {
		headers: {
			...headers,
			// https://docs.github.com/en/rest/overview/media-types
			Accept: 'application/vnd.github.v3.raw'
		}
	});

	if (!response.ok) {
		throw new Error(`💩 Could not fetch ${postUrl}`);
	}

	const postMarkdown = await response.text();
	const { content, frontmatter } = await markdownToHTML(postMarkdown);

	return { content, frontmatter, postMarkdown };
}

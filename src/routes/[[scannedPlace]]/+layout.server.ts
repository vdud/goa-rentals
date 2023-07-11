import type { LayoutServerLoad } from './$types';

import { blogs } from '$db/collections';

export const load = (async () => {
	const allBlogs = await blogs.find({}).toArray();

	return {
		status: 200,
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			allBlogs
		})
	};
}) as LayoutServerLoad;

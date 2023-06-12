import type { LayoutServerLoad } from './$types';

import { vehicles, blogs } from '$db/collections';

export const load = (async () => {
	const allBikes = await vehicles.find({}).toArray();
	const allBlogs = await blogs.find({}).toArray();

	return {
		status: 200,
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			allBikes,
			allBlogs
		})
	};
}) as LayoutServerLoad;

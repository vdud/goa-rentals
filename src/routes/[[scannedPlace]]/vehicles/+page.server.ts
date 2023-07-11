import type { PageServerLoad } from './$types';

import { vehicles } from '$db/collections';

export const load = (async () => {
	const allBikes = await vehicles.find({}).toArray();

	return {
		status: 200,
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			allBikes
		})
	};
}) as PageServerLoad;

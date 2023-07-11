import type { PageServerLoad } from './$types';

import { vehicles, scannedPlaces } from '$db/collections';

export const load = (async ({ params }) => {
	const { scannedPlace } = params;
	if (scannedPlace) {
		const findPlace = await scannedPlaces.findOne({ location: scannedPlace });
		console.log('findPlace', findPlace);
		// add views
		if (findPlace) {
			await scannedPlaces.updateOne({ location: scannedPlace }, { $inc: { views: 1 } }, { upsert: true });
		} else {
			await scannedPlaces.insertOne({ location: scannedPlace, views: 1 });
		}
	}

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

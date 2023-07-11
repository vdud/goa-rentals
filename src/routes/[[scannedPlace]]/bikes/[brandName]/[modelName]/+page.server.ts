import type { PageServerLoad } from './$types';

import { vehicles } from '$db/collections';
import { json } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const { brandName, modelName } = params;
	const vehicleData = await vehicles.findOne({ brandName, modelName });

	console.log('vehicleData', vehicleData);

	return {
		status: 200,
		body: {
			vehicleData: JSON.stringify(vehicleData)
		}
	};
}) as PageServerLoad;

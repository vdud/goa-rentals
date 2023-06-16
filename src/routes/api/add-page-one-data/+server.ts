import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { forms } from '$db/collections';

export const POST: RequestHandler = async ({ request }) => {
	const { $PickupLocation, $dateFrom, $dateTo, $VehicleName, $timeSpan } = await request.json();

	const insertForm = await forms.insertOne({
		PickupLocation: $PickupLocation,
		dateFrom: $dateFrom,
		dateTo: $dateTo,
		VehicleName: $VehicleName,
		timeSpan: $timeSpan
	});

	return json({ insertForm });
};

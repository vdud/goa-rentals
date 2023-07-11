import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { forms } from '$db/collections';

export const POST: RequestHandler = async ({ request }) => {
	const { $PickupLocation, $dateFrom, $dateTo, $VehicleId, $timeSpan, totalRent, discount } = await request.json();
	// console.log('$PickupLocation, $dateFrom, $dateTo, $VehicleName, $timeSpan ', $PickupLocation, $dateFrom, $dateTo, $VehicleName, $timeSpan);

	const insertForm = await forms.insertOne({
		PickupLocation: $PickupLocation,
		dateFrom: $dateFrom,
		dateTo: $dateTo,
		VehicleId: $VehicleId,
		timeSpan: $timeSpan,
		currentTime: new Date(),
		totalRent: totalRent,
		isHalf: true,
		isJustContact: false,
		discount: discount
	});

	return json({ insertForm });
};

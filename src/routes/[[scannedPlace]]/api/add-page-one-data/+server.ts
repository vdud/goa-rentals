import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { forms } from '$db/collections';
import { sendEmail } from '$lib/bigFunctions/smtpEmail';
import { timeSpan } from '$lib/stores/bookingStore';
import { calculateTimeSpan } from '$lib/bigFunctions/timeFn';

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

	console.log('Sending Email');
	await sendEmail(
		'varundudejaapple@gmail.com',
		'Someone is trying to book a ride',
		`Checkout the details of the booking:\n\nPickup Location: ${$PickupLocation}\ntimeSpan: ${calculateTimeSpan($timeSpan)}\ntotalRent: ${totalRent}\n\nRegards,\nGoa Rentals`
	);

	return json({ insertForm });
};

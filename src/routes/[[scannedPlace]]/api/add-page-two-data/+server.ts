import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { calculateTimeSpan, timeSpanRentCal } from '$lib/bigFunctions/timeFn';

import { forms, vehicles } from '$db/collections';
import { ObjectId } from 'mongodb';
import { bookingId } from '$lib/stores/bookingStore';

import { sendEmail } from '$lib/bigFunctions/smtpEmail';

export const POST: RequestHandler = async ({ request }) => {
	const { $bookingId, allData } = await request.json();

	await sendEmail(allData.Email, 'Booking on Goa Rentals', `Hello ${allData.Name},\n\nThank you for booking with us. We will get back to you shortly.\n\nRegards,\nGoa Rentals`);

	if ($bookingId === undefined) {
		const bookingId = await forms.insertOne({
			Name: allData.Name,
			Email: allData.Email,
			PhoneNumber: allData.PhoneNumber,
			isJustContact: true,
			isHalf: true
		});

		await sendEmail(
			'varundudejaapple@gmail.com',
			'Someone Booked a Ride',
			`Checkout the details of the booking:\n\nName: ${allData.Name}\nEmail: ${allData.Email}\nPhone Number: ${allData.PhoneNumber}\n\nRegards,\nGoa Rentals`
		);

		return json({ success: true, bookingId: bookingId.insertedId });
	} else {
		await forms.updateOne(
			{ _id: new ObjectId($bookingId) },
			{
				$set: {
					Name: allData.Name,
					Email: allData.Email,
					PhoneNumber: allData.PhoneNumber,
					isHalf: false,
					isJustContact: false,
					paymentStatus: 'unpaid'
				}
			},
			{ upsert: true }
		);
		const findFullFOrm = await forms.findOne({ _id: new ObjectId($bookingId) });
		if (findFullFOrm === null) return json({ success: false });
		const findVehicle = await vehicles.findOne({ _id: new ObjectId(findFullFOrm.VehicleId) });
		if (findVehicle === null) return json({ success: false });
		await sendEmail(
			'varundudejaapple@gmail.com',
			'Someone Booked a Ride',
			`Checkout the details of the booking:\n\nName: ${allData.Name}\nEmail: ${allData.Email}\nPhone Number: ${allData.PhoneNumber}\n\nRegards,\nGoa Rentals and other details are:\n\n Tracking Id: ${
				findFullFOrm._id
			} \n\n dateFrom: ${findFullFOrm.dateFrom} \n\n dateTo: ${findFullFOrm.dateTo}
			\n\n VehicleName: ${findVehicle.brandName} ${findVehicle.modelName} \n\n timeSpan: ${calculateTimeSpan(findFullFOrm.timeSpan)} \n\n TotalRent: ${timeSpanRentCal({
				timeSpan: findFullFOrm.timeSpan,
				rent: findVehicle.rent
			})} \n\n Regards,\nGoa Rentals)}`
		);

		return json({ bookingId: $bookingId, success: true });
	}
};

import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { forms } from '$db/collections';
import { ObjectId } from 'mongodb';
import { bookingId } from '$lib/stores/bookingStore';

export const POST: RequestHandler = async ({ request }) => {
	const { $bookingId, allData } = await request.json();

	console.log('$bookingId, allData ', $bookingId, allData);

	if ($bookingId === undefined) {
		const bookingId = await forms.insertOne({
			Name: allData.Name,
			Email: allData.Email,
			PhoneNumber: allData.PhoneNumber,
			isJustContact: true,
			isHalf: true
		});
		console.log('bookingId', bookingId);
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
					isJustContact: false
				}
			},
			{ upsert: true }
		);

		return json({ bookingId: $bookingId, success: true });
	}
};

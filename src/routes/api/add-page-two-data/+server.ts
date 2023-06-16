import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { forms } from '$db/collections';
import { ObjectId } from 'mongodb';

export const POST: RequestHandler = async ({ request }) => {
	const { $bookingId, allData } = await request.json();
	if (Object.keys($bookingId).length === 0) {
		forms.insertOne({
			Name: allData.Name,
			Email: allData.Email,
			PhoneNumber: allData.PhoneNumber
		});
	} else {
		forms.updateOne(
			{ _id: new ObjectId($bookingId.insertForm.insertedId) },
			{
				$set: {
					Name: allData.Name,
					Email: allData.Email,
					PhoneNumber: allData.PhoneNumber
				}
			}
		);
	}

	return json({ success: true });
};

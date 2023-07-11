import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { forms } from '$db/collections';
import { BSON, ObjectId } from 'mongodb';

export const POST: RequestHandler = async ({ request }) => {
	const value = await request.json();
	console.log('value', value);

	if (!value) {
		return json(
			{ error: 'No data was sent. 😢' },
			{
				status: 400
			}
		);
	}

	if (BSON.ObjectId.isValid(value)) {
		const findOrder = await forms.findOne({ _id: new ObjectId(value) });

		console.log('findOrder', findOrder);

		return json({ findOrder, success: true });
	}
	console.log('Error');

	return json(
		{ error: 'Enter the correct Id Please. 😊' },
		{
			status: 400
		}
	);
};

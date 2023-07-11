import { forms, vehicles } from '$db/collections';
import { ObjectId } from 'mongodb';

export const load = async ({ params }) => {
	const { trackingId } = params;

	const findForm = await forms.findOne({ _id: new ObjectId(trackingId) });
	const findVehicle = await vehicles.findOne({ _id: new ObjectId(findForm.VehicleId) });

	console.log('findForm', findForm);

	return {
		body: {
			findForm: JSON.stringify(findForm),
			findVehicle: JSON.stringify(findVehicle)
		}
	};
};

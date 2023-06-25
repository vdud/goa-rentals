import { ObjectId } from 'mongodb';
import { forms, vehicles } from '$db/collections';
import type { PageServerLoad } from './$types';
import { sendEmail } from '$lib/bigFunctions/smtpEmail';

import Stripe from 'stripe';
const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15'
});

export const load = (async ({ params }) => {
	const { formId } = params;

	const findForm = await forms.findOne({ _id: new ObjectId(formId) });
	const findVehicle = await vehicles.findOne({ _id: new ObjectId(findForm.VehicleId) });

	if (findForm.paymentStatus === 'paid') {
		return {
			body: {
				status: 'paid',
				findForm: JSON.stringify(findForm),
				findVehicle: JSON.stringify(findVehicle)
			}
		};
	}

	// if paymentSessionId is null, then the payment was not successful
	if (!findForm.paymentSessionId) {
		console.log('paymentSessionId is null');
		return {
			body: {
				status: 'unpaid',
				findForm: JSON.stringify(findForm),
				findVehicle: JSON.stringify(findVehicle)
			}
		};
	}
	const session = await stripe.checkout.sessions.retrieve(findForm.paymentSessionId);
	// if intent is null, then the payment was not successful
	if (!session.payment_intent) {
		console.log('session.payment_intent', session.payment_intent);

		return {
			body: {
				status: 'failed',
				findForm: JSON.stringify(findForm),
				findVehicle: JSON.stringify(findVehicle)
			}
		};
	}

	// all session relevant stripe data for invoicing
	const paymentIntentId = session.payment_intent;
	const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
	const paymentIntentStatus = paymentIntent.status;

	console.log('findForm', findForm);

	if (paymentIntentStatus === 'succeeded') {
		await forms.updateOne({ _id: new ObjectId(formId) }, { $set: { paymentStatus: 'paid', paymentInvoiceId: paymentIntentId } }, { upsert: true });
		const findUpdatedForm = await forms.findOne({ _id: new ObjectId(formId) });

		sendEmail(findForm.Email, 'Payment successful', 'Your payment was successful. Thank you for your business.');
		sendEmail(
			'varundudeja96@gmail.com',
			'Payment successful',
			`Payment successful for ${findForm.Email} for ${findVehicle.name} for ${findForm.timeSpan} days with total rent of ${findForm.totalRent}`
		);
		return {
			body: {
				status: 'paid',
				findForm: JSON.stringify(findUpdatedForm),
				findVehicle: JSON.stringify(findVehicle)
			}
		};
	} else {
		return {
			body: {
				status: 'unpaid',
				findForm: JSON.stringify(findUpdatedForm),
				findVehicle: JSON.stringify(findVehicle)
			}
		};
	}
}) satisfies PageServerLoad;

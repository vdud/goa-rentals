import Stripe from 'stripe';
// const stripe = require('stripe')(import.meta.env.STRIPE_SECRET_KEY);
//  type script
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

import { forms, vehicles } from '$db/collections';
import { sendEmail } from '$lib/bigFunctions/smtpEmail';
// console.log('import.meta.env.STRIPE_SECRET_KEY', import.meta.env.VITE_STRIPE_SECRET_KEY);
const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15'
});

export const POST: RequestHandler = async ({ request, res }) => {
	const { sessionId, bookingId } = await request.json();
	console.log('sessionId', sessionId);
	console.log('bookingId', bookingId);

	try {
		// Retrieve the payment intent from the session ID
		const session = await stripe.checkout.sessions.retrieve(sessionId);

		console.log('session', session);

		if (!session.payment_intent) {
			return json({ status: 'unpaid' });
		}

		const paymentIntentId = session.payment_intent;

		// Retrieve the payment intent from Stripe
		const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

		// Return the payment status

		if (paymentIntent.status === 'succeeded') {
			await forms.updateOne({ _id: new ObjectId(bookingId) }, { $set: { paymentStatus: 'paid', paymentInvoiceId: paymentIntentId } }, { upsert: true });
			sendEmail(
				'varundudeja96@gmail.com',
				'Goa Rentals - Booking Confirmation',
				`Your booking has been confirmed. Booking Id: ${bookingId}
				Your payment transection id by Stripe is: ${paymentIntentId}
				Total Amount Paid: ${paymentIntent.amount}`
			);
			return json({ status: paymentIntent.status, paymentIntentId });
		}
	} catch (error) {
		console.error('Error retrieving payment status:', error);
		return json({ status: 'error' });
	}
};

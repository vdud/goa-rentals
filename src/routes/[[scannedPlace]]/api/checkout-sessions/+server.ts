import Stripe from 'stripe';
// const stripe = require('stripe')(import.meta.env.STRIPE_SECRET_KEY);
//  type script
import { json } from '@sveltejs/kit';

import { sendEmail } from '$lib/bigFunctions/smtpEmail';

import { ObjectId } from 'mongodb';

import { forms, vehicles } from '$db/collections';
// console.log('import.meta.env.STRIPE_SECRET_KEY', import.meta.env.VITE_STRIPE_SECRET_KEY);
const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15'
});

export const POST: RequestHandler = async ({ request, res }) => {
	const { bookingId } = await request.json();

	const bookingForm = await forms.findOne({ _id: new ObjectId(bookingId) });
	if (bookingForm === null) {
		return new Response(JSON.stringify({ url: '', sessionId: '' }), {
			status: 200,
			headers: { 'content-type': 'application/json' }
		});
	}
	const findVehicle = await vehicles.findOne({ _id: new ObjectId(bookingForm.VehicleId) });
	if (findVehicle === null) {
		return new Response(JSON.stringify({ url: '', sessionId: '' }), {
			status: 200,
			headers: { 'content-type': 'application/json' }
		});
	}

	const formTimeSpan = bookingForm.timeSpan;
	const timeSpan = formTimeSpan;
	let timeSPanInDays = Math.floor(timeSpan / (1000 * 60 * 60 * 24));
	if (timeSPanInDays === 0) {
		timeSPanInDays = 1;
	}
	const discount = bookingForm.discount;
	console.log('timeSPanInDays', timeSPanInDays);
	console.log('discount', discount);

	if (bookingForm.paymentStatus === 'paid') {
		return new Response(JSON.stringify({ url: '', sessionId: '' }), {
			status: 200,
			headers: { 'content-type': 'application/json' }
		});
	}

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: findVehicle.stripeId,
				quantity: timeSPanInDays
			}
		],
		mode: 'payment',
		discounts: [
			{
				coupon: discount
			}
		],
		success_url: `${import.meta.env.VITE_HOME_PAGE}/paymentStatus/${bookingId}`,
		cancel_url: `${import.meta.env.VITE_HOME_PAGE}/paymentStatus/${bookingId}`
	});

	forms.updateOne(
		{ _id: new ObjectId(bookingId) },
		{
			$set: {
				paymentSessionId: session.id
			}
		},
		{ upsert: true }
	);

	sendEmail(
		bookingForm.Email,
		'Complete The Payment',
		`
	Hello ${bookingForm.Name},\n\nThank you for booking with us. Please complete the payment by clicking on the link below.\n\n${session.url}\n\nRegards,\nGoa Rentals`
	);

	return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
};

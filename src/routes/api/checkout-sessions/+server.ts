import Stripe from 'stripe';
// const stripe = require('stripe')(import.meta.env.STRIPE_SECRET_KEY);
//  type script
import { json } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

import { forms, vehicles } from '$db/collections';
// console.log('import.meta.env.STRIPE_SECRET_KEY', import.meta.env.VITE_STRIPE_SECRET_KEY);
const stripe = new Stripe(import.meta.env.VITE_STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15'
});

export const POST: RequestHandler = async ({ request, res }) => {
	const { bookingId } = await request.json();

	const bookingForm = await forms.findOne({ _id: new ObjectId(bookingId) });
	const findVehicle = await vehicles.findOne({ _id: new ObjectId(bookingForm.VehicleId) });

	const formTimeSpan = bookingForm.timeSpan;
	const timeSpan = formTimeSpan;
	let timeSPanInDays = Math.floor(timeSpan / (1000 * 60 * 60 * 24));
	if (timeSPanInDays === 0) {
		timeSPanInDays = 1;
	}
	const discount = bookingForm.discount;
	console.log('timeSPanInDays', timeSPanInDays);
	console.log('discount', discount);

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
		success_url: 'https://www.goarentals.com/success',
		cancel_url: 'https://www.goarentals.com/cancel'
	});

	return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
};

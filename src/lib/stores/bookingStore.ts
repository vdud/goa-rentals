import { writable } from 'svelte/store';

export const dateFrom = writable('');
export const dateTo = writable('');
export const PickupLocation = writable();
export const VehicleId = writable();
export const bookingId = writable();
export const timeSpan = writable(0);

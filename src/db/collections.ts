import db from '$db/mongo';

export const vehicles = db.collection('vehicles');
export const blogs = db.collection('blogs');
export const subscriber = db.collection('subscriber');

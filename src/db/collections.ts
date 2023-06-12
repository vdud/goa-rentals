import db from '$db/mongo';

export const vehicles = db.collection('vehicles');
export const blogs = db.collection('blogs');

import { blogs } from '$db/collections';

export const load = async ({ params }) => {
	const { trackingId } = params;

	return {
		body: {
			trackingId
		}
	};
};

export const payNow = async (dataBody: any) => {
	function isPopupBlockerEnabled() {
		const popupWindow = window.open('', '_blank', 'width=100,height=100');
		if (!popupWindow || popupWindow.closed || typeof popupWindow.closed == 'undefined' || typeof popupWindow === 'undefined') {
			return true; // Popup was blocked
		}
		popupWindow.close();
		return false; // Popup was not blocked
	}

	// Usage example
	if (isPopupBlockerEnabled()) {
		alert('Popup blocker is enabled. Please disable it to allow popups.');
	}

	const response = await fetch('/api/checkout-sessions', {
		// http://localhost:5173/api/stripeCheckout
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ bookingId: dataBody._id })
	});

	const res = await response.json();
	// remove payNowDiv

	console.log('res.url', res.url);

	if (res.url) {
		window.location.href = res.url;
	} else {
		'/paymentStatus/' + dataBody._id + '/';
	}
};

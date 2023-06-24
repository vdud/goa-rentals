export const timeSpanRentCalFromAllBikes = (data: any) => {
	const vehicle = data.allBikes.find((bike) => bike._id === data.$VehicleId);
	// console.log('vehicle', vehicle);

	const days = Math.floor(data.$timeSpan / (1000 * 60 * 60 * 24));
	// console.log('days', days);
	if (days === 0) {
		const rent = vehicle.rent;

		return rent;
	}
	// const months = Math.floor(days / 30);
	// const years = Math.floor(days / 365);
	if (days > 7 && days < 30) {
		const weeks = Math.floor(days / 7);
		// addDiscount
		const rentInWeeks = days * vehicle.rent * 0.9;
		// console.log('rentInWeeks', rentInWeeks);
		return rentInWeeks;
	}
	if (days > 30 && days < 365) {
		const months = Math.floor(days / 30);
		// addDiscount
		const rentInMonths = days * vehicle.rent * 0.8;
		// console.log('rentInMonths', rentInMonths);
		return rentInMonths;
	}
	if (days > 365) {
		const years = Math.floor(days / 365);
		// addDiscount
		const rentInYears = days * vehicle.rent * 0.5;
		// console.log('rentInYears', rentInYears);
		return rentInYears;
	} else {
		const rentInDays = days * vehicle.rent;
		// console.log('rentInDays', rentInDays);

		return rentInDays;
	}
};

export const perDayRentCalc = (data: any) => {
	const vehicle = data.allBikes.find((bike) => bike._id === data.$VehicleId);
	console.log('vehicle', vehicle);
	const days = Math.floor(data.$timeSpan / (1000 * 60 * 60 * 24));
	console.log('data', data);

	const rent = vehicle.rent;
	console.log('rent', rent);
	console.log('days', days);

	if (days > 7 && days < 30) {
		console.log('weekly');
		return {
			rent: rent * 0.9,
			discount: '8A4U95tc'
		};
	}
	if (days > 30 && days < 365) {
		console.log('monthly');
		return {
			rent: rent * 0.8,
			discount: 'mxj9fOsa'
		};
	}
	if (days > 365) {
		console.log('yearly');
		return {
			rent: rent * 0.5,
			discount: 'hArKh0w7'
		};
	} else {
		console.log('daily');
		return {
			rent: rent,
			discount: 'uTwUGcXF'
		};
	}
};

export const totalRentperDay = ($timeSpan: Any, rent: Any) => {
	console.log('timeSpan', $timeSpan);
	console.log('rent', rent);
	const days = Math.floor($timeSpan / (1000 * 60 * 60 * 24));
	console.log('days', days);

	if (days > 7 && days < 30) {
		console.log('weekly');
		return rent * 0.9;
	}
	if (days > 30 && days < 365) {
		console.log('monthly');
		return rent * 0.8;
	}
	if (days > 365) {
		console.log('yearly');
		return rent * 0.5;
	} else {
		console.log('daily');
		return rent;
	}
};

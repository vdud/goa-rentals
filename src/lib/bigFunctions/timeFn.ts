type CustomDateTimeFormatOptions = {
	year?: 'numeric';
	month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
	day?: 'numeric' | '2-digit';
	hour?: 'numeric' | '2-digit';
	minute?: 'numeric' | '2-digit';
};

export const openedFor = (data: Date) => {
	const date = new Date(data);
	const now = new Date();
	const diff = now.getTime() - date.getTime();
	const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

	if (diffDays === 0) {
		// Today
		const options: CustomDateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' };
		const formattedTime = date.toLocaleTimeString([], options);
		return `Today at ${formattedTime}`;
	} else if (diffDays === 1) {
		// Yesterday
		const options: CustomDateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' };
		const formattedTime = date.toLocaleTimeString([], options);
		return `Yesterday at ${formattedTime}`;
	} else if (diffDays === -1) {
		// Tomorrow
		const options: CustomDateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' };
		const formattedTime = date.toLocaleTimeString([], options);
		return `Tomorrow at ${formattedTime}`;
	} else {
		// Exact date and time
		const options: CustomDateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
		const formattedDateTime = date.toLocaleDateString([], options);
		return formattedDateTime;
	}
};
export const calculateTimeSpan = (timeSpan: number) => {
	const seconds = Math.floor((timeSpan / 1000) % 60);
	const minutes = Math.floor((timeSpan / (1000 * 60)) % 60);
	const hours = Math.floor((timeSpan / (1000 * 60 * 60)) % 24);
	const days = Math.floor(timeSpan / (1000 * 60 * 60 * 24));
	const weeks = Math.floor(timeSpan / (1000 * 60 * 60 * 24 * 7));
	const months = Math.floor(timeSpan / (1000 * 60 * 60 * 24 * 30.44));
	const years = Math.floor(timeSpan / (1000 * 60 * 60 * 24 * 365.25));

	const timeComponents = [];

	if (years > 0) {
		const yearText = years === 1 ? 'year' : 'years';
		timeComponents.push(`${years} ${yearText}`);
	}

	if (months > 0) {
		const monthText = months === 1 ? 'month' : 'months';
		timeComponents.push(`${months} ${monthText}`);
	}

	if (weeks > 0) {
		const weekText = weeks === 1 ? 'week' : 'weeks';
		timeComponents.push(`${weeks} ${weekText}`);
	}

	if (days > 0) {
		const dayText = days === 1 ? 'day' : 'days';
		timeComponents.push(`${days} ${dayText}`);
	}

	if (hours > 0) {
		const hourText = hours === 1 ? 'hour' : 'hours';
		timeComponents.push(`${hours} ${hourText}`);
	}

	if (minutes > 0) {
		const minuteText = minutes === 1 ? 'minute' : 'minutes';
		timeComponents.push(`${minutes} ${minuteText}`);
	}

	if (seconds > 0) {
		const secondText = seconds === 1 ? 'second' : 'seconds';
		timeComponents.push(`${seconds} ${secondText}`);
	}

	return timeComponents.join(' ');
};

export const timeSpanCal = (dateFrom: any, dateTo: any) => {
	const dateFromArr = dateFrom.split(' ');
	const dateToArr = dateTo.split(' ');

	const dateFromArrDate = dateFromArr[0].split('-');
	const dateToArrDate = dateToArr[0].split('-');

	const dateFromArrTime = dateFromArr[1].split(':');
	const dateToArrTime = dateToArr[1].split(':');

	const dateFromArrDateNum = dateFromArrDate.map((x: any) => parseInt(x));
	const dateToArrDateNum = dateToArrDate.map((x: any) => parseInt(x));

	const dateFromArrTimeNum = dateFromArrTime.map((x: any) => parseInt(x));
	const dateToArrTimeNum = dateToArrTime.map((x: any) => parseInt(x));

	const dateFromObj = new Date(dateFromArrDateNum[2], dateFromArrDateNum[1] - 1, dateFromArrDateNum[0], dateFromArrTimeNum[0], dateFromArrTimeNum[1]);

	const dateToObj = new Date(dateToArrDateNum[2], dateToArrDateNum[1] - 1, dateToArrDateNum[0], dateToArrTimeNum[0], dateToArrTimeNum[1]);

	const timeSpan = dateToObj.getTime() - dateFromObj.getTime();
	return timeSpan;
};

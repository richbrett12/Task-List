class DateRange {
	constructor(dayOfWeek, startTime, endTime) {
		if (typeof dayOfWeek !== "number" || !(0 <= dayOfWeek && dayOfWeek <= 6)) {
			throw "dayOfWeek must be number";
		}
		if (!startTime.match(/\d{2}:\d{2}/)) {
			throw "startTime is not a valid time! Expected: \\d\\d:\\d\\d";
		}
		if (!endTime.match(/\d{2}:\d{2}/)) {
			throw "endTime is not a valid time! Expected: \\d\\d:\\d\\d";
		}

		this.dayOfWeek = dayOfWeek;
		this.startTime = startTime;
		this.endTime = endTime;
	}
	
	// functions
	getDay() {
		return this.dayOfWeek;
	}

	getStartTime() {
		return this.startTime;
	}

	getEndTime() {
		return this.endTime;
	}

	contains(date) {
		if (date.getDay() !== this.getDay()) {
			return false;
		}
		var dateStr = date.getHours() + ":" + date.getMinutes();
		return (this.getStartTime() <= dateStr && dateStr <= this.getEndTime());
	}
}

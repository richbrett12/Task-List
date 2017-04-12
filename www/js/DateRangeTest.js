class DateRangeTest {
	run() {
		this.constructor_requires_day_and_time_ranges();
		this.can_tell_if_a_range_contains_a_given_date();
	}

	constructor_requires_day_and_time_ranges() {
		console.log(".");
		var dateRange = new DateRange(1, "13:30", "14:20");
		console.assert(1 === dateRange.getDay());
		console.assert("13:30" === dateRange.getStartTime());
		console.assert("14:20" === dateRange.getEndTime());
	}

	can_tell_if_a_range_contains_a_given_date() {
		console.log(".");
		var dateRange = new DateRange(1, "11:00", "12:30");
		var dateTime;

		// create a new Date inside that range
		dateTime = new Date("April 10, 2017 11:30:00");
		console.assert(dateRange.contains(dateTime));

		// create a new date on the same day but earlier
		dateTime = new Date("April 10, 2017 10:00:00");
		console.assert(!dateRange.contains(dateTime));

		// create a new date on the same day but later
		dateTime = new Date("April 10, 2017 13:00:00");
		console.assert(!dateRange.contains(dateTime));

		// create a new date on a different day
		dateTime = new Date("April 11, 2017 11:30:00");
		console.assert(!dateRange.contains(dateTime));
	}

}

window.DateRangeTest = DateRangeTest;

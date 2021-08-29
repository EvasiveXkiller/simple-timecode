module.exports = class timecode {
	constructor() {
	}

	/**
	 * Converts millisecond to standard time code
	 * @param ms Milliseconds in number
	 * @returns {string} Converted Timecode Eg. 2:55:55
	 */
	static MillisecondsToTime(ms) {
		const seconds = Math.floor((ms / 1000) % 60);
		const minutes = Math.floor((ms / 60000) % 60);
		const hours = Math.floor(ms / 3600000);

		const secondsT = `${seconds}`.padStart(2, "0");
		const minutesT = `${minutes}`.padStart(2, "0");
		const hoursT = `${hours}`.padStart(2, "0");

		return `${hours ? `${hoursT}:` : ""}${minutesT}:${secondsT}`;
	}

	/**
	 * Converts a standard time code to milliseconds.
	 * @param time The time code. Eg. 2:55:55
	 * @returns {number} Milliseconds
	 */
	static TimeToMilliseconds(time) {
		const items = time.split(":");
		return (
			items.reduceRight(
				(prev, curr, i, arr) =>
					prev + parseInt(curr) * 60 ** (arr.length - 1 - i),
				0
			) * 1000
		);
	}
}
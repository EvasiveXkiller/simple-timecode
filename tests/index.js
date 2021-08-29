const { test } = require("tape");
const { timecode } = require("../src/index.js");

test("Miliseconds -> Time", async (t) => {
	const dummyTimeFull = "2:45:00";
	const expectedOutputTime = 9900000;
	const time = timecode.TimeToMilliseconds(dummyTimeFull);
	t.equal(time, expectedOutputTime, `TimeToMilliseconds has expected output`);

	const dummyTimeMilliseconds = 1.62e+7;
	const expectedOutputMilliseconds = "04:30:00"
	const milliseconds = timecode.MillisecondsToTime(dummyTimeMilliseconds);
	t.equal(milliseconds, expectedOutputMilliseconds, `MillisecondsToTime has expected output`);

	t.end();
})


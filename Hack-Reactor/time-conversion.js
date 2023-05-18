// Submissions Leaderboard	Discussions	Editorial
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example:
// var to hold whether it is am or pm
// hour, min, sec variable
// we want to show 0-11 if it is am
// 12-23 if pm
// parseInt hour, 10 +12
// return the time

// Time Complexity: O(1) + Space complexity O(1)

function timeConversion(s) {
  let amOrPm = s.slice(s.length - 2, s.length);
  let hour = s.slice(0, 2);
  let min = s.slice(3, 5);
  let sec = s.slice(6, 8);
  if (amOrPm === 'AM') {
    hour === '12' ? (hour = '00') : (hour = hour);
  } else {
    hour === '12' ? (hour = hour) : (hour = parseInt(hour, 10) + 12);
  }
  return `${hour}:${min}:${sec}`;
}

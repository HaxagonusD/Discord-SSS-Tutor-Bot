const getData = require("./getData.js");
const schedule = getData("tutor schedule.json");

var days = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
};
for (row of schedule) {
  if (days.hasOwnProperty(row.Day)) {
    days[row.Day].push(row);
  }
}

console.log(days);
/** Days
 * { Monday: {
 *      Tutors: {},
 *      Subjects: {}
 * },
 * Tuesday: {...},
 * ...
 * }
 */

/**
 * Subject
 * { subject: "name",
 *
 * }
 */

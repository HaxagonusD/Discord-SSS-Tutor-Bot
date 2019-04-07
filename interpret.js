const getData = require("./getData.js");
const schedule = getData("tutor schedule.json");
const fs = require('fs');

const interpret = function(){
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

var data = JSON.stringify(data);

fs.writeFile('days.json', data, (err) =>{
  if(err) throw err;
  console.log("The data was successfully written to the file");
})
}

module.exports = interpret;


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

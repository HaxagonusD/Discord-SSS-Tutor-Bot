const getData = require("../getData.js");
const schedule = getData("tutor schedule.json");
module.exports = {
  name: "when",
  description: "Tells you when a tutor tutors",
  execute: (message, args) => {
    schedule.forEach(row => {
      if (row.Tutor === args[0]) {
        message.channel.send(
          `${args[0]} tutors ${row.Subject} ${row.Day} ${row.Time} at ${
            row.Location
          }`
        );
      }
    });
  }
};

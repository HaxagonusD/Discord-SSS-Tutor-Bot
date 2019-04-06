const fs = require("fs");
const getData = require("../getData.js");
const schedule = getData("tutor schedule.json");
module.exports = {
  name: "add",
  description: "Adds a tutor, time, location, day of the week, and subject",
  execute: (message, args) => {}
};

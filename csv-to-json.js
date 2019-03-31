let csvToJson = require("convert-csv-to-json");

const csvToJson = () => {
  let fileInputName = "tutor schedule.csv";
  let fileOutputName = "tutor schedule.json";

  csvToJson
    .fieldDelimiter(",")
    .generateJsonFileFromCsv(fileInputName, fileOutputName);
};

module.exports = csvToJson;

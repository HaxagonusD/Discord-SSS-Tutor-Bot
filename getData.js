const fs = require("fs");
const getData = filename => {
  const hex = fs.readFileSync(filename);
  const content = JSON.parse(hex);
  return content;
};
module.exports = getData;

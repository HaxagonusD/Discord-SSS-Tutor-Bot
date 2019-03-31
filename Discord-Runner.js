const Discord = require("discord.js");
const client = new Discord.Client();
const getData = require("./getData.js");
const { token, prefix } = require("./configuration.json");
const schedule = getData("tutor schedule.json");

client.on("message", message => {
  if (message.content.startsWith(`${prefix}when `)) {
    var content = message.content;
    content = content.slice(prefix.length + 5, content.length);

    schedule.forEach(row => {
      if (row.Tutor === content) {
        message.channel.send(
          `${content} tutors ${row.Subject} ${row.Day} ${row.Time} at ${
            row.Location
          }`
        );
      }
    });
  }
});

client.on("ready", () => {
  for (row in schedule) {
  }
  console.log("Ready!");
});

client.login(token);

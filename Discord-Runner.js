const Discord = require("discord.js");
const fs = require("fs");
const { token, prefix } = require("./configuration.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  // set a new item in the Collection
  // with the key as the command name and the value as the exported module

  client.commands.set(command.name, command);
}

client.on("message", message => {
  if (!message.content.startsWith(prefix || message.author.bot)) {
    return;
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) {
    return;
  }

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.log(error);
    message.reply(error);
  }
});

client.on("ready", () => {
  console.log("Ready!");
});

client.login(token);

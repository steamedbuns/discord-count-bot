const BotContext = require('./BotContext.js');
const Discord = require('discord.js');
const { token } = require('./secrets.json');

// Instantiate discord client.
const client = new Discord.Client();
// Instantiate command collection.
client.commands = new Discord.Collection();

// Instantiate bot context object.
const context = new BotContext();

client.once('ready', context.ready);
client.on('message', context.onMessage);

client.login(token);
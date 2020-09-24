const BotContext = require('./BotContext.js');
const Discord = require('discord.js');
const { token } = require('./secrets.json');
const { prefix, command_paths } = require('./config.json');

// Instantiate discord client.
const client = new Discord.Client();
// Instantiate command collection.
client.commands = new Discord.Collection();

// Instantiate bot context object.
const context = new BotContext(prefix);

function onReady() {
	// Dynamically load commands.
	for (const command_path of command_paths) {
		const command = require(`${command_path}`);
		client.commands.set(command.name, command);
	}
	console.log('Count Bot online.');
}

function onMessage(message) {
	if (message.author.bot || !message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;
	try {
		client.commands.get(command).execute(context, message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
}

client.once('ready', onReady);
client.on('message', onMessage);

client.login(token);
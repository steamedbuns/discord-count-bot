const token = require('./secrets.json');
const { prefix, commands } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

const commandHandlers = [];
function onReady() {
	commands.forEach((value) => {
		const commandHandler = require(`${value.handler}`);
		commandHandlers.push({ command: value.command, handler: commandHandler });
	});
	console.log('Count Bot online.');
}

function onMessage(message) {
	if (message.author.id === client.user.id || !message.content.startsWith(prefix)) {
		console.log('Not a valid command.');
		return;
	}
	console.log(message.content);
}

client.once('ready', onReady);
client.on('message', onMessage);

client.login(token);
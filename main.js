const Discord = require('discord.js');
const client = new Discord.Client();

function onReady() {
	console.log('Count Bot online.');
}

client.once('ready', onReady);
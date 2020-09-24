module.exports = {
	name: 'bind',
	description: 'Bind Count Bot to the current channel.',
	execute(botContext, message, args) {
		console.log('This is the handler for the bind command.');
		console.log(`Command arguments: ${args}`);
		if (botContext.channel) {
			console.log(`Count Bot has already been bound to ${message.channel.name}.`);
			message.channel.send(`Count Bot has already been bound #${message.channel.name}.`);
		}
		else {
			botContext.channel = message.channel.name;
			message.channel.send(`Count Bot has been bound to #${message.channel.name}.`);
		}
	},
};
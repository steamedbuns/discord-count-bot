module.exports = {
	name: 'bind',
	description: 'Bind Count Bot to the current channel.',
	arg_low: 0,
	arg_high: 0,
	execute(botContext, message, args) {
		args;
		if (botContext.channel) {
			return message.channel.send(`Count Bot has already been bound #${message.channel.name}.`);
		}
		else {
			botContext.channel = message.channel.name;
			return message.channel.send(`Count Bot has been bound to #${message.channel.name}.`);
		}
	},
};
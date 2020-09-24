module.exports = {
	name: 'bind',
	description: 'Bind Count Bot to the current channel.',
	arg_low: 0,
	arg_high: 0,
	execute(botContext, message, args) {
		args;
		if (botContext.channel_id) {
			return message.channel.send(`Count Bot has already been bound to <#${botContext.channel_id}>.`);
		}
		else {
			botContext.channel_id = message.channel.id;
			return message.channel.send(`Count Bot has been bound to <#${botContext.channel_id}>.`);
		}
	},
};
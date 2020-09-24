module.exports = {
	name: 'bind',
	description: 'Bind Count Bot to the current channel.',
	arg_low: 0,
	arg_high: 0,
	execute(state, message, args) {
		args;
		if (state.channel_id) {
			return message.channel.send(`Count Bot has already been bound to <#${state.channel_id}>.`);
		}
		else {
			state.channel_id = message.channel.id;
			return message.channel.send(`Count Bot has been bound to <#${state.channel_id}>.`);
		}
	},
};
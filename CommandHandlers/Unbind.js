module.exports = {
	name: 'unbind',
	description: 'Unbind Count Bot from the current channel. Use -f argument to force an unbind.',
	arg_low: 0,
	arg_high: 1,
	execute(state, message, args) {
		args;
		if (!state.channel_id) {
			return message.channel.send('Count Bot is not bound to any channel.');
		}
		if (args[0] === '-f' || message.channel.id === state.channel_id) {
			const chan_id = state.channel_id;
			state.channel_id = '';
			message.channel.send(`Count Bot has been unbound from <#${chan_id}>.`);
		}
		else {
			message.channel.send(
				`The unbind command must be run from <#${state.channel_id}>
To force an unbind, use ${state.prefix} unbind -f`);
		}
	},
};
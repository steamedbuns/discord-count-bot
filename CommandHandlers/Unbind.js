module.exports = {
	name: 'unbind',
	description: 'Unbind Count Bot from the current channel. Use -f argument to force an unbind.',
	arg_low: 0,
	arg_high: 1,
	execute(botContext, message, args) {
		args;
		if (!botContext.channel) {
			return message.channel.send('Count Bot is not bound to any channel.');
		}
		if (args[0] === '-f' || message.channel.name === botContext.channel) {
			const chan = botContext.channel;
			botContext.channel = '';
			message.channel.send(`Count Bot has been unbound from #${chan}.`);
		}
		else {
			message.channel.send(
				`The unbind command must be run from #${botContext.channel}
To force an unbind, use ${botContext.prefix} unbind -f`);
		}
	},
};
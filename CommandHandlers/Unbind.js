module.exports = {
	name: 'unbind',
	description: 'Unbind Count Bot from the current channel. Use -f argument to force an unbind.',
	execute(botContext, message, args) {
		console.log('This is the handler for the unbind command.');
		console.log(`Command arguments: ${args}`);
		if (!botContext.channel) {
			console.log('Count Bot is not bound to any channel.');
			message.channel.send('Count Bot is not bound to any channel.');
		}
		else if (args[0] === '-f' || message.channel.name === botContext.channel) {
			const chan = botContext.channel;
			botContext.channel = '';
			console.log('Unbinding Count Bot.');
			message.channel.send(`Count Bot has been unbound from #${chan}.`);
		}
		else {
			console.log('Unbinding from wrong channel.');
			message.channel.send(
				`The unbind command must be run from #${botContext.channel}
To force an unbind, use ${botContext.prefix} unbind -f`);
		}
	},
};
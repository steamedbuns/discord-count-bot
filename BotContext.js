const { prefix, command_paths } = require('./config.json');

class BotContext {
	constructor() {
		this.m_state = { channel_id: '', prefix: prefix };
		this.commands = new Map();
	}

	ready() {
		// Dynamically load commands.
		for (const command_path of command_paths) {
			const command = require(`${command_path}`);
			this.commands.set(command.name, command);
		}
		console.log('Count Bot online.');
	}

	onMessage(message) {
		// Check message from self and irrelevant messages.
		if (message.author.bot || !message.content.startsWith(prefix)) return;

		// Prepare message for consumption.
		const args = message.content.slice(prefix.length).trim().split(' ');
		const commandName = args.shift().toLowerCase();

		if (!this.commands.has(commandName)) return;

		const command = this.commands.get(commandName);

		// Argument check.
		if (args.length < command.arg_low && args.length > command.arg_high) {
			return message.channel.send(`You didn't provide the correct arguments, ${message.author}.`);
		}

		// Execute command.
		try {
			command.execute(this.m_state, message, args);
		}
		catch (error) {
			console.error(error);
			message.reply('There was an error trying to execute that command!');
		}
	}
}

module.exports = BotContext;
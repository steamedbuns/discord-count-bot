class BotContext {
	constructor(prefix) {
		this.m_channel = '';
		this.m_prefix = prefix;
	}

	get channel() {
		return this.m_channel;
	}
	set channel(channel) {
		this.m_channel = channel;
	}

	get prefix() {
		return this.m_prefix;
	}
}

module.exports = BotContext;
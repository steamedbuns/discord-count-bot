class BotContext {
	constructor(prefix) {
		this.m_channel_id = '';
		this.m_prefix = prefix;
	}

	get channel_id() {
		return this.m_channel_id;
	}
	set channel_id(channel_id) {
		this.m_channel_id = channel_id;
	}

	get prefix() {
		return this.m_prefix;
	}
}

module.exports = BotContext;
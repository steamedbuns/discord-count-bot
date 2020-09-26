class BotState {
	constructor(prefix) {
		this.m_channel_id = '';
		this.m_prefix = prefix;
		this.m_count = 0;
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

	get count() {
		return this.m_count;
	}
	set count(count) {
		this.m_count = count;
	}
}

module.exports = BotState;
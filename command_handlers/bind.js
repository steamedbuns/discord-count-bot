function handle(message) {
	console.log('This is the handler for the bind command.');
	console.log(`Message content: ${message.content}`);
}

module.exports.handle = handle;
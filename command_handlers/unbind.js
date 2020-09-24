function handle(message) {
	console.log('This is the handler for the unbind command.');
	console.log(`Message content: ${message.content}`);
}

module.exports.handle = handle;
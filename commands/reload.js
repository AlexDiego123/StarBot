module.exports = {
	name: 'reload',
	args: true,
	usage: '[Command Name]',
	execute(message, args) {
		if (!message.author.id === '355382614695084032') return message.channel.send(`${message.author.username} You Don\'t Have Permission To Reload The Commands`)

		const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`There Is No Command With This Name Or Alias: \`${commandName}\`, ${message.author}!`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			message.client.commands.set(newCommand.name, newCommand);
			message.channel.send(`The Command \'${command.name}\' Has Been Reloaded`);
		} catch (error) {
			console.log(error);
			message.channel.send(`An Error Occurred While Restarting The Command: \`${command.name}\`:\n\`${error.message}\``);
		}
	},
};
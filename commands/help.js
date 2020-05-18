const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	aliases: ['commands'],
	usage: '[Command Name]',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Here Is A List Of All My Commands');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nYou Can Type \'${prefix}help [Command Name]\' To Get Info About A Specific Command`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I Sent You A DM Message With A List Of All My Commands');
				})
				.catch(error => {
					message.reply('I Can\'t Send You A DM Message');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('That Command Is Not Valid');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Alias:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Correct Usage:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Cooldown:** ${command.cooldown || 3} Second(s)`);

		message.channel.send(data, { split: true });
	},
};
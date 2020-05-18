const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	client.user.setActivity(`---help | In ${client.guilds.cache.size} Servers`, { type: 'PLAYING' });
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		
	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I Can\'t Execute This Command In DM Channels');
	}

	if (command.args && !args.length) {
		let reply = `You Have Not Provided Any Topic, ${message.author}!`;

		if (command.usage) {
			reply += `\nHere Is The Correct Use Of This Command: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}
try {
	command.execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('There Was An Error In Executing That Command');
}
})

client.login(token)
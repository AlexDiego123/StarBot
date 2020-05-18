const Discord = require('discord.js')
module.exports = {
	name: 'user-info',
	guildOnly: 'true',
	usage: '[Member Name]',
	execute(message, args) {
		if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${message.author.username} Non Hai Il Permesso Di Fare Il Comando __**user-info**__`)
		
		let taggedUser = message.mentions.users.first();

		if (!message.mentions.users.size) {
            return message.reply('You Must Mention A Member To See His Information');
        }

		const userinfo = new Discord.MessageEmbed()
	.setColor('ff0000')
	.setTitle(`Here Is The Information Of The Member: ${taggedUser.username}`)
	.setDescription(`**Username: ${taggedUser.username}\nID: ${taggedUser.id}\nStatus: ${taggedUser.presence.status}\nTag: ${taggedUser.tag}\nBot: ${taggedUser.bot}**`)
	.setTimestamp()
	.setFooter(`Command Executed By: ${message.author.username}`)

message.channel.send(userinfo);
	},
};
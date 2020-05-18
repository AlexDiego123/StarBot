const Client = require('discord.js')
module.exports = {
    name: 'unban',
	guildOnly: 'true',
	usage: '[Member Id]',
	execute(message, args) {
		if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`${message.author.username} You Don\'t Have Permission To Do The Command __**unban**__`)
		
		if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I Don\'t Have Permission To Unban Members')

		let unbanid = message.content.substring(message.content.indexOf(' ')+1)

		message.guild.members.unban(`${unbanid}`)
		message.channel.send(`The Member ${unbanid} Has Been Unbanned From The Server`)
		}
	}
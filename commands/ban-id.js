const Client = require('discord.js')
module.exports = {
    name: 'ban-id',
    guildOnly: 'true',
    usage: '[Member Id]',
	execute(message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**ban-id**__`)

        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I Don\' Have Permission To Ban Members')

        let memberbanid = message.content.substring(message.content.indexOf(' ')+1)

        let banid = message.guild.members.cache.get(memberbanid)

        if(!banid) return message.channel.send('Member Not Found')

        if(!banid.bannable) return message.channel.send('You Can\'t Ban A Moderator/Admin')

        message.guild.members.ban(`${banid}`);
        message.channel.send(`${message.author.username} Member ${banid} Has Been Banned From The Server`)
		}
	}

const Client = require('discord.js')
module.exports = {    
    name: 'kick',
    guildOnly: true,
    usage: '[Member Name]',
	execute(message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**kick**__`)

        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('I Don\'t Have Permission To Kick Members')

        if (!message.mentions.users.size) {
            return message.reply('You Must Mention A Member To Kick Him');
        }
        const taggedUser = message.mentions.users.first();
    
        const member = message.mentions.members.first();

        if(!member.kickable) return message.channel.send(`${message.author.username} You Can\'t Kick A Moderator/Admin`)

        member.kick().then (message.channel.send(`${message.author.username} The Mentioned Member Was Kicked From The Server`))
    }
	}
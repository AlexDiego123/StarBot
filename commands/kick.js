const Discord = require('discord.js')
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

        let reason = args.slice(1).join(' ')

        if(!reason) {
            reason = 'no reason'
        }

        const kickcommandembed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle(`Kick`)
        .setDescription(`:construction_worker: **Moderator:** ${message.author.username}\n\n:bust_in_silhouette: **Kicked User:** ${taggedUser.username}\n\n:page_facing_up: **Reason:** ${reason}`)
        .setTimestamp()
        .setFooter(`Command Executed By: ${message.author.username}`);

        member.kick(reason).then (message.channel.send(kickcommandembed))
    }
	}

const Discord = require('discord.js')
module.exports = {
    name: 'ban',
    guildOnly: true,
    usage: '[Member Name]',
	execute(message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**ban**__`)

        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I Don\'t Have Permission To Ban Members')

        if (!message.mentions.users.size) {
            return message.reply('You Must Mention A Member To Ban Him');
        }
        const taggedUser = message.mentions.users.first();
    
        const member = message.mentions.members.first();

        if(!member.bannable) return message.channel.send('You Can\'t Ban A Moderator/Admin')

        let reason = args.slice(1).join(' ')

        if(!reason) {
            reason = 'no reason'
        }

        const bancommandembed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle(`Ban`)
        .setDescription(`:construction_worker: **Moderator:** ${message.author.username}\n\n:bust_in_silhouette: **Banned User:** ${taggedUser.username}\n\n:page_facing_up: **Reason:** ${reason}`)
        .setTimestamp()
        .setFooter(`Command Executed By: ${message.author.username}`);

        member.ban({ reason: reason }).then (message.channel.send(bancommandembed))

    }
    }

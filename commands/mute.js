const Client = require('discord.js')
module.exports = {
    name: 'mute',
    guildOnly: 'true',
    usage: '[Member Name]',
	execute(message, args) {
        if(!message.member.hasPermission('MANAGE_GUILD', 'MANAGE_ROLES')) return message.channel.send(`${message.author.username} You Don\'t Have Permission To Do The Command __**mute**__`)

        else {
            let memberId = message.content.substring(message.content.indexOf(' ')+1);
            let member = message.guild.members.cache.get(memberId)
            if(member) {
                if(member.hasPermission('MUTE_MEMBERS', 'MANAGE_GUILD') && !message.member.hasPermission('ADMINISTRATOR')) {
                    message.channel.send('You Cannot Mute A Moderator/Admin');
                }
                if(!message.guild.me.hasPermission('MANAGE_GUILD', 'MANAGE_ROLES')) return message.channel.send('I Don\'t Have Permission To Mute Members')

                else {
                    let mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                    if(mutedRole) {
                        member.roles.add(mutedRole);
                        message.channel.send('The Member Has Been Muted')
                    }
                    else {
                        message.channel.send('The Muted Role Was Not Found')
                    }
                }
            }
            else {
                message.channel.send('Member Not Found')
            }
        }
        }
		}
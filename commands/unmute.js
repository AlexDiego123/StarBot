const Client = require('discord.js')
module.exports = {
    name: 'unmute',
    guildOnly: 'true',
    usage: '[Member Name]',
	execute(message, args) {
        if(!message.member.hasPermission('MANAGE_GUILD', 'MANAGE_ROLES')) return message.channel.send(`${message.author.username} Non Hai Il Permesso Di Fare Il Comando __**unmute**__`)

        if(!message.guild.me.hasPermission('MANAGE_GUILD', 'MANAGE_ROLES')) return message.channel.send('Non Ho Il Permesso Di Smutare Gli Altri')

        else {
            let memberId = message.content.substring(message.content.indexOf(' ')+1);
            let member = message.guild.members.cache.get(memberId)
            if(member) {
                if(member.hasPermission('MUTE_MEMBERS', 'MANAGE_GUILD') && !message.member.hasPermission('ADMINISTRATOR')) {
                    message.channel.send('You Can\'t Unmute A Moderator/Admin');
                }

                else {
                    let mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                    if(mutedRole) {
                        member.roles.remove(mutedRole);
                        message.channel.send('The Member Has Been Unmuted')
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
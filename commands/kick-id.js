const Client = require('discord.js')
module.exports = {
    name: 'kick-id',
    guildOnly: 'true',
    usage: '[Member Id]',
	execute(message, args) {
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**kick-id**__`)

        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('I Don\'t Have Permission To Kick Members')

        let memberId = message.content.substring(message.content.indexOf(' ')+1);
        let member = message.guild.members.cache.get(memberId);

        if(member) {
            try {
                member.kick();
                message.channel.send(`${message.author.username} The Member ${memberId} Has Been Kicked From The Server`)
            }
            catch(err) {
                console.log(err);
            }
        }
        if(!member) return message.channel.send('Member Not Found')
        }
    }
const Client = require('discord.js')
module.exports = {
    name: 'deleterole',
    guildOnly: 'true',
    usage: '[Role Name]',
	execute(message, args) {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**deleterole**__`)

        if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send('I Don\'t Have Permission To Delete Roles')

        let Nome = message.content.substring(message.content.indexOf(' ')+1)

        message.guild.roles.cache.delete({ data: { name: (Nome)} });

        message.channel.send(`The Role ${Nome} Has Been Eliminated`)
		}
	}
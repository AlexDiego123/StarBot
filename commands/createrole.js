const Client = require('discord.js')
module.exports = {
    name: 'createrole',
    guildOnly: 'true',
    usage: '[Role Name]',
	execute(message, args) {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**createrole**__`)

        if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send('i Don\'t Have Permission To Create Roles')

        let Nome = message.content.substring(message.content.indexOf(' ')+1)

        message.guild.roles.create({ data: { name: (Nome)} });

        message.channel.send(`The Role ${Nome} Has Been Created`)
		}
	}
const Client = require('discord.js')
module.exports = {
    name: 'createvoicechannel',
    guildOnly: 'true',
    usage: '[Channel Name]',
	execute(message, args) {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**createvoicechannel**__`)

        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('I Don\'t Have Permission To Create Channels')

        let NomeCanale = message.content.substring(message.content.indexOf(' ')+1)

        message.guild.channels.create((NomeCanale), {
            type: 'voice'
        }
        )
        message.channel.send(`The Voice Channel ${NomeCanale} Has Been Created`)
		}
	}
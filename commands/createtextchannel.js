const Client = require('discord.js')
module.exports = {
    name: 'createtextchannel',
    guildOnly: 'true',
    usage: '[Channel Name]',
	execute(message, args) {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**createtextchannel**__`)

        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('I Don\'t Have Permission To Create Channels')

        let NomeCanale = message.content.substring(message.content.indexOf(' ')+1)

        message.guild.channels.create((NomeCanale), {
            type: 'text'
        }
        )
        message.channel.send(`The Textual Channel ${NomeCanale} Has Been Created`)
		}
	}
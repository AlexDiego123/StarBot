const client = require('discord.js')
const Discord = require('discord.js')
module.exports = {
	name: 'ping',
	execute(message, args) {
		message.channel.send('Pong')
	}
}
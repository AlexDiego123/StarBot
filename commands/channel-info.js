const Discord = require('discord.js')
module.exports = {
	name: 'channel-info',
	usage: '[Channel Name]',
	execute(message, args) {
		if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**channel-info**__`)
		
		if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('I Am Not Allowed To View Channel Information')

		let Nomecanale = message.content.substring(message.content.indexOf(' ')+1)

		let canale = message.guild.channels.cache.find(channel => channel.name === (Nomecanale))

		if(!canale) return message.channel.send('Channel Not Found')

        const channelinfo = new Discord.MessageEmbed()
	.setColor('ff0000')
	.setTitle(`Here Is The Information Of The Channel: ${canale.name}`)
	.setDescription(`**Name: ${canale.name}\nDescription: ${canale.topic}\nCategory: ${canale.parent}\nType: ${canale.type}\nPosition: ${canale.position}\nID: ${canale.id}\nSlowmode: ${canale.rateLimitPerUser}\nNsfw: ${canale.nsfw}\nBitRate: ${canale.bitrate}**`)
	.setTimestamp()
	.setFooter(`Command Executed By: ${message.author.username}`);
		

message.channel.send(channelinfo);
		}
	}

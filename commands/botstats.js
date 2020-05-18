const Discord = require('discord.js')
const client = require('discord.js')
const fs = require('fs')
module.exports = {
	name: 'botstats',
	execute(message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**botstats**__`)

        const botstats = new Discord.MessageEmbed()
	.setColor('ff0000')
	.setTitle(`Here Are The Statistics Of The Bot`)
	.setDescription(``)
    .setTimestamp()
    .addFields(
       { name: 'Bot Version:', value: '2.5 BETA', inline: true},
       { name: 'discord.js Version:', value: 'v12.2.0', inline: true},
       { name: 'node.js Version:', value: 'v12.16.2', inline: true}
    )
	.setFooter(`Command Executed By: ${message.author.username}`);
		

message.channel.send(botstats);
    }
		}

const Discord = require('discord.js')
module.exports = {
	name: 'botchangelog',
	execute(message, args) {
        const changelog = new Discord.MessageEmbed()
        .setColor('0000FF')
        .setTitle('**v2.5 BETA**')
        .setDescription('Added The Command **createrole**\nAdded The Command **createtextchannel**\nAdded The Command **createvoicechannel**\nAdded The Command **mute**\nAdded The Command **unmute**\nAdded The Command **botchangelog**\n\n**New Update Of The Version v2.5 BETA**\n\nAdded The Command **ban-id**\nAdded The Command **unban**\nAdded The Command **deleterole**\n\n**New Update Of The Version v2.5 BETA**\nAdded The Command **kick-id**\n\n**New Update Of The Version v2.5 BETA**\nTotal Roles Added To The Command **server-info**\nAdded The Command **role-info**\n\n**New Update Of The Version v2.5 BETA**\nAdded The Command **8ball**\nModified The **help** command\nAdded The Command **utility**\nAdded The Command **moderation**\nAdded The Command **games**\nAdded The Command **config**\nAdded The Command **botinfo**\nAdded The Command **invite**')
        .setTimestamp()
        .setFooter(`Command Executed By: ${message.author.username}`);
            
    
    message.channel.send(changelog);
		}
	}

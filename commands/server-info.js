const Discord = require('discord.js')
module.exports = {
	name: 'server-info',
	guildOnly: 'true',
	execute(message, args) {
		if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${message.author.username} You Don\'t Have Permission To Do The Command __**server-info**__`)
		
		const serverinfo = new Discord.MessageEmbed()
	.setColor('ff0000')
	.setTitle(`Here Is The Information Of The Server: ${message.guild.name}`)
	.setDescription(`**Server Name: ${message.guild.name}\nServer Owner: ${message.guild.owner}\nTotal Members: ${message.guild.memberCount}\nID: ${message.guild.id}\nTotal Channels (Including Categories): ${message.guild.channels.cache.size}\nTotal Roles: ${message.guild.roles.cache.size}\nTotal Emojis: ${message.guild.emojis.cache.size}\nServer Icon URL: ${message.guild.iconURL({ dynamic: 'true'})}\nVerification Level: ${message.guild.verificationLevel}\nAFK Channel: ${message.guild.afkChannel}\nAFK Timeout: ${message.guild.afkTimeout}ms**`)
	.setTimestamp()
	.setFooter(`Command Executed By: ${message.author.username}`)
		

message.channel.send(serverinfo);
	}

}



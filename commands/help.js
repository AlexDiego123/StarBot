const Discord = require('discord.js')
module.exports = {
	name: 'help',
	aliases: ['commands'],
	guildOnly: 'true',
	usage: '[Command Name]',
	execute(message, args) {
		const helpembed = new Discord.MessageEmbed()
		.setColor('00ff00')
		.setTitle(`Here Is A List Of All My Commands`)
		.setDescription(`**Categories**`)
		.addFields(
			{ name: ':hammer: Moderation', value: 'Moderation Category'},
			{ name: ':gear: Config', value: 'Config Category'},
			{ name: ':video_game: Games', value: 'Games Category'},
			{ name: ':information_source: Bot Info', value: 'Bot Info Category'},
			{ name: ':wrench: Utility', value: 'Utility Category'}
		)
		.setTimestamp()
		.setFooter(`Command Executed By: ${message.author.username}`);


        message.channel.send(helpembed)
	},
};

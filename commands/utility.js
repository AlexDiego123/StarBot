const Discord = require('discord.js')
module.exports = {
	name: 'utility',
	guildOnly: 'true',
	execute(message, args) {
		const helpinfoembed = new Discord.MessageEmbed()
		.setColor('00ff00')
		.setTitle(`:wrench: Utility Commands`)
		.addFields(
			{ name: ':wrench: user-info', value: 'Displays A Specific User Information.'},
			{ name: ':wrench: server-info', value: 'Displays The Server Information.'},
			{ name: ':wrench: server-info.adv', value: 'Displays The Server Advanced Information.'},
			{ name: ':wrench: createrole', value: 'Creates A Role.'},
			{ name: ':wrench: createtextchannel', value: 'Creates A Text Channel.'},
			{ name: ':wrench: createvoicechannel', value: 'Creates A Voice Channel.'},
			{ name: ':wrench: channel-info', value: 'Displays A Specific Channel Information.'},
			{ name: ':wrench: role-info', value: 'Displays A Specific Role Information.'},
			{ name: ':wrench: avatar', value: 'Displays A Specific User Avatar.'}
		)
		.setTimestamp()
		.setFooter(`Command Executed By: ${message.author.username}`);


        message.channel.send(helpinfoembed)
	},
};
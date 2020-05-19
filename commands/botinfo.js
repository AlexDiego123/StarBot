const Discord = require('discord.js')
module.exports = {
	name: 'botinfo',
	guildOnly: 'true',
	execute(message, args) {
		const helpbotinfoembed = new Discord.MessageEmbed()
		.setColor('00ff00')
		.setTitle(`:information_source: Bot Info Commands`)
		.setDescription(`**Categories**`)
		.addFields(
			{ name: ':bar_chart: botstats', value: 'Displays The Bot Stats.'},
			{ name: ':page_with_curl: botchangelog', value: 'Displays The Bot Changelog.'},
			{ name: ':mailbox_with_mail: invite', value: 'Displays The Link To Invite The Bot In Other Servers'}
		)
		.setTimestamp()
		.setFooter(`Command Executed By: ${message.author.username}`);


        message.channel.send(helpbotinfoembed)
	},
};

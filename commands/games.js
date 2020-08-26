const Discord = require('discord.js')
module.exports = {
	name: 'games',
	guildOnly: 'true',
	execute(message, args) {
		const helpgamesembed = new Discord.MessageEmbed()
		.setColor('00ff00')
		.setTitle(`:video_game: Games Commands`)
		.addFields(
			{ name: ':8ball: 8ball', value: 'Responds With A Random Answer.'},
			{ name: 'Coin Flip', value: 'Responds With Heads Or Tails'}
		)
		.setTimestamp()
		.setFooter(`Command Executed By: ${message.author.username}`);


        message.channel.send(helpgamesembed)
	},
};

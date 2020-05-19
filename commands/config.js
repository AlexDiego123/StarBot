const Discord = require('discord.js')
module.exports = {
	name: 'config',
	guildOnly: 'true',
	execute(message, args) {
		const helpconfigembed = new Discord.MessageEmbed()
		.setColor('00ff00')
		.setTitle(`:gear: Config Commands`)
		.addFields(
			{ name: ':arrows_counterclockwise: reload', value: 'Reloads A Specific Command.'}
		)
		.setTimestamp()
		.setFooter(`Command Executed By: ${message.author.username}`);


        message.channel.send(helpconfigembed)
	}
}
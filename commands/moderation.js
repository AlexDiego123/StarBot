const Discord = require('discord.js')
module.exports = {
	name: 'moderation',
	guildOnly: 'true',
	execute(message, args) {
		const helpmoderationembed = new Discord.MessageEmbed()
		.setColor('00ff00')
		.setTitle(`:hammer: Moderation Commands`)
		.addFields(
			{ name: ':rewind: kick', value: 'Kicks A Member.'},
			{ name: ':rewind: kick-id', value: 'Kicks A Member But With ID.'},
			{ name: ':exclamation: ban', value: 'Bans A Member.'},
			{ name: ':exclamation: ban-id', value: 'Bans A Member But With ID.'},
			{ name: ':grey_exclamation: unban', value: 'Unbans A Member With ID.'},
			{ name: ':no_entry_sign: mute', value: 'Mutes A Member.'},
			{ name: ':o: unmute', value: 'Unmutes A Member.'},
			{ name: ':x: clear', value: 'Deletes A Specific Number Of Messages.'}
		)
		.setTimestamp()
		.setFooter(`Command Executed By: ${message.author.username}`);


        message.channel.send(helpmoderationembed)
	}
}
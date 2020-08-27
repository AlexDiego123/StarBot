const Discord = require('discord.js')
module.exports = {
	name: 'developers',
	guildOnly: 'true',
	execute(message, args) {
        const developerscommandembed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle(`StarBot Developers`)
        .setDescription(`AlexDiego123#4466\n\nGalaxyVinci05#9304`)
        .setTimestamp()
        .setFooter(`Command Executed By: ${message.author.username}`);
            
    
    message.channel.send(developerscommandembed);
	}
}
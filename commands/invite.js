const Discord = require('discord.js')
module.exports = {
	name: 'invite',
	execute(message, args) {
        const invitecommand = new Discord.MessageEmbed()
        .setColor('0000ff')
        .setTitle(`Invite`)
        .setDescription(`Click This Link To Invite Me In Others Servers: https://discord.com/api/oauth2/authorize?client_id=704059931044872303&permissions=8&scope=bot`)
        .setTimestamp()
        .setFooter(`Command Executed By: ${message.author.username}`);

        message.channel.send(invitecommand)
	}
}
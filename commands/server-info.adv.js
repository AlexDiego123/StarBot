const Discord = require('discord.js')
module.exports = {
	name: 'server-info.adv',
	guildOnly: 'true',
	execute(message, args) {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${message.author.username} You Don\'t Have Permission To Do The Command __**server-info.adv**__`)
        
        message.guild.members.fetch().then(fetchedMembers => {
            const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');

        message.guild.members.fetch().then(fetchedMembers => {
            const totaldnd = fetchedMembers.filter(member => member.presence.status === 'dnd');

        message.guild.members.fetch().then(fetchedMembers => {
            const totalinactive = fetchedMembers.filter(member => member.presence.status === 'idle');
		
		const serverinfoadv = new Discord.MessageEmbed()
	.setColor('ff0000')
	.setTitle(`Here Is The Advanced Information Of The Server: ${message.guild.name}`)
	.setDescription(`**Total Members With Online Status: ${totalOnline.size}\nTotal Members With Do Not Disturb Status ${totaldnd.size}\nTotal Members With Inactive Status: ${totalinactive.size}**`)
	.setTimestamp()
	.setFooter(`Command Executed By: ${message.author.username}`);
		

message.channel.send(serverinfoadv);
    })
    })
    })

}

}
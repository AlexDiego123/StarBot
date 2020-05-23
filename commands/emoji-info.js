const Discord = require('discord.js')
module.exports = {
    name: 'emoji-info',
    guildOnly: 'true',
    usage: '[Emoji Name Without ::]',
	execute(message, args) {
        if (!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('You Don\'t Have Permission To Do The Command **__emoji-info__**')

        if (!message.guild.me.hasPermission('MANAGE_EMOJIS')) return message.channel.send('I Don\'t Have Permission To See Emoji Info')

        let emojiname = message.content.substring(message.content.indexOf(' ')+1)

        let emoji = message.guild.emojis.cache.find(emoji => emoji.name === (emojiname))

        if (!emoji) return message.channel.send('Emoji Not Found')

        const emojicommand = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle(`Here Is The Information Of The Emoji ${emojiname}`)
        .setDescription(`Name: ${emoji.name}\nID: ${emoji.id}\nAnimated: ${emoji.animated}\nManaged: ${emoji.managed}`)
        .setTimestamp()
        .setFooter(`Command Executed By: ${message.author.username}`);

        message.channel.send(emojicommand)
	}
}
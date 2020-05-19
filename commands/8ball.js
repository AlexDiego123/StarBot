const prefix = require('../config.json')
const Discord = require('discord.js')
module.exports = {
    name: '8ball',
    guildOnly: 'true',
    usage: '[Question]',
	execute(message, args) {
        let replies = ["Yes","No","Maybe","Probably"];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(' ')

        if(!question) return message.channel.send('You Didn\'t Provide Any Question')

        const ballcommand = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTimestamp()
        .addFields(
            { name: 'Question', value: (question)},
            { name: 'Answer', value: (replies[result])}
        )
        .setFooter(`Command Executed By: ${message.author.username}`);

        message.channel.send(ballcommand)
	}
}
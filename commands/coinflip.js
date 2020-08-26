const Discord = require('discord.js')
module.exports = {
	name: 'coinflip',
	execute(message, args) {
        let answers = ['Heads','Tails']

        let result = Math.floor((Math.random() * answers.length))

        const coinflipcommandembed = new Discord.MessageEmbed()
        .setColor('ff0000')
        .setTitle(`Coin Flip`)
        .setDescription(`${answers[result]}`)
        .setTimestamp()
        .setFooter(`Command Executed By: ${message.author.username}`);
            
    
    message.channel.send(coinflipcommandembed);
	}
}
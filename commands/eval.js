const Discord = require('discord.js')
module.exports = {
	name: 'eval',
	guildOnly: 'true',
	execute(message, args) {
        if(message.author.id != '355382614695084032') return message.channel.send('You Don\'t Have Permission To Do The Command __**eval**__')

        let evalcode = args.slice(0).join(' ')

        if(!evalcode) return message.channel.send('You Have To Specify A Code To Evaluate')

        if(evalcode.includes('config.token') || evalcode.includes('token')) {
            const evalcommandembed2 = new Discord.MessageEmbed()
                .setColor('ff0000')
                .setTitle(`Eval Error`)
                .setDescription(`Error: You Can't Evaluate The Bot token`)
                .setTimestamp()
                .setFooter(`Command Executed By: ${message.author.username}`);
                    
            
            return message.channel.send(evalcommandembed2);
        }

        try {
            const evalcommandembed = new Discord.MessageEmbed()
            .setColor('ff0000')
            .setTitle(`Eval Result`)
            .setDescription(`Result: \`\`\`js\n${eval(evalcode)}\n\`\`\``)
            .setTimestamp()
            .setFooter(`Command Executed By: ${message.author.username}`);
                
        
        message.channel.send(evalcommandembed);
        } catch(err) {
            if(err) {
                console.log(err)

                const evalcommandembed2 = new Discord.MessageEmbed()
                .setColor('ff0000')
                .setTitle(`Eval Error`)
                .setDescription(`Error: \`\`\`js\n${err}\n\`\`\``)
                .setTimestamp()
                .setFooter(`Command Executed By: ${message.author.username}`);
                    
            
            message.channel.send(evalcommandembed2);
            }
        }
	}
}
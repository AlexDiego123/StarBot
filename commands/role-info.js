const Discord = require('discord.js')
module.exports = {
    name: 'role-info',
    guildOnly: 'true',
    usage: '[Role Name]',
	execute(message, args) {
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`${message.author.username} You Don\'t Have Permission To Do The Command __**role-info**__`)

        if(!message.guild.me.hasPermission('MANAGE_ROLES')) return message.channel.send('I Don\'t Have Permission To View Role Information')

        let NomeRuolo = message.content.substring(message.content.indexOf(' ')+1)

        let CercaRuolo = message.guild.roles.cache.find(role => role.name === (NomeRuolo))

        if(!NomeRuolo) return message.channel.send('You Must Specify A Role To See The Information')

        if(!CercaRuolo) return message.channel.send('Role Not Found')

        const roleinfo = new Discord.MessageEmbed()
        .setColor('3bb9ff')
        .setTitle(`Here Is The Information Of The Role ${CercaRuolo.name}`)
        .setDescription(`Role Name: ${CercaRuolo.name}\nID: ${CercaRuolo.id}\nColor: ${CercaRuolo.color}\nMentionable: ${CercaRuolo.mentionable}\nPosition: ${CercaRuolo.position}\nManaged: ${CercaRuolo.managed}\nHoisted: ${CercaRuolo.hoist}`)
        .setTimestamp()
        .setFooter(`Command Executed By: ${message.author.username}`)

        message.channel.send(roleinfo)
		}
	}

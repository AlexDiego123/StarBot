module.exports = {
    name: 'ban',
    guildOnly: true,
    usage: '[Member Tag]',
	execute(message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**ban**__`)

        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I Don\'t Have Permission To Ban Members')

        if (!message.mentions.users.size) {
            return message.reply('You Must Mention A Member To Ban Him');
        }
    
        const member = message.mentions.members.first();
        member.ban().then (message.channel.send(`${message.author.username} Member ${member} Has Been Banned From The Server`))
    }
	}

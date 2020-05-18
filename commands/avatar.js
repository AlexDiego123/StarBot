module.exports = {
    name: 'avatar',
    aliases: ['icon'],
	execute(message, args) {
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**avatar**__`)

        if (!message.mentions.users.size) {
            return message.channel.send(`Here Is You Avatar: ${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `Here Is The Avatar Of ${user.username} <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
        message.channel.send(avatarList);
    }
	}

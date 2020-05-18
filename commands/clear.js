module.exports = {
    name: 'clear',
    usage: '[Number Of Messages To Delete]',
    guildOnly: 'true',
	execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`${message.author.username} You Are Not Allowed To Do The Command __**clear**__`)

        if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send('I Don\'t Have Permission To Delete Messages')

        const amount = parseInt(args[0]) + 1;
		
        if (isNaN(amount)) {
            return message.reply('The Number Entered Is Not A Valid Number');
    }else if (amount <= 1 || amount > 100) {
                return message.reply('You Must A Number Between 1 And 99');
             }
        
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('An Error Occurred While Attempting To delete Messages')
        });
	},
};
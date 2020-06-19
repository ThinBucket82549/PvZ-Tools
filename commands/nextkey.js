const Discord = require('discord.js');
const { version } = require('../config.json');
const { characterkey } = require('../config/timers.json');

const KeyEmbed = new Discord.MessageEmbed()
    .setColor('#eaa854')
    .setTitle('Next Character Key <:ChallengeKey:722965867968593960>')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setThumbnail('https://cdn.discordapp.com/attachments/714776565166375013/722965275347124324/Currency_ChallengeKeyIcon_128px.png')
    .setTimestamp();

module.exports = {
    name: 'nextkey',
    description: 'Get the amount of time left until the next Character Key is available.',
    execute(message, args){
        var nextKeyIn = new Date(`${characterkey}`).getTime();

        var now = new Date().getTime();

        var timeLeft = nextKeyIn - now;

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        KeyEmbed.setDescription('Next Character Key in ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s. \n"
        + "3/4 Keys Distributed");

        if (timeLeft < 0) {
            KeyEmbed.setDescription("Ask zSupremoz to fix this.");
        }
        message.channel.send(KeyEmbed);
    }
}
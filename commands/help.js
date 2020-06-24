const Discord = require('discord.js');
const { version } = require('../config.json');

const HelpEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('Help Commands')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Help Pages', value: 'pvz.help\npvz.help gw1\npvz.help gw2\npvz.help bfn'},
        { name: 'Other Commands', value: 'pvz.info - Shows information about the bot.\npvz.botchangelog(s) - Shows bot update information.\npvz.todo - Shows the current To-Do list for PvZ Tools.\npvz.support - A link to the support server will be sent to your DMs.'},
        { name: 'Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools/tree/master#pvz-tools' }
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();
// #5d38a9
const Gw1Embed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('Garden Warfare 1 Commands')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Commands', value: 'pvz.gw1plant - Random GW1 Plant\npvz.gw1zombie - Random GW1 Zombie\npvz.gw1gamemode - Random GW1 gamemode'},
        { name: 'Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools/tree/master#pvz-tools' }
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

const Gw2Embed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('Garden Warfare 2 Commands')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Commands', value: 'pvz.gw2plant - Random GW2 Plant.\npvz.gw2zombie - Random GW2 Zombie.\npvz.mysteryportal - Check the current Mystery Portal event.\npvz.rux - Check when Rux leaves.\npvz.gw2gamemode - Random GW2 gamemode'},
        { name: 'Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools/tree/master#pvz-tools' }
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

const BfNEmbed = new Discord.MessageEmbed()
    .setColor('#00175a')
    .setTitle('Battle for Neighborville Commands')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Commands', value: 'pvz.bfnplant - Random BFN Plant.\npvz.bfnzombie - Random BFN Zombie.\npvz.weeklyevent - Check the current Weekly Event.\npvz.nextkey - Check when the next Character Key is available.\npvz.prizemap - Check Prize Map information.\npvz.prizemap list - Check Prize Map rewards.\npvz.tobulb [XP] - Converts specified XP to Prize Bulbs.\npvz.toxp [Prize Bulbs] - Converts specified Prize Bulbs to XP.\npvz.eventdata [Event Name] - Shows information about a Weekly Event (pvz.eventdata list)\npvz.challenges - View the current Character Challenges.\npvz.arena - View the current Battle Arena rotation.\npvz.bfngamemode - Random BFN gamemode\npvz.ruxbundles [Bundle Name] - View BFN Rux bundles'},
        { name: 'Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools/tree/master#pvz-tools' }
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();


module.exports = {
    name: 'help',
    description: 'Shows help commands.',
    execute(message, args){
        switch (args[0])
        {
            case 'gw1':
                message.channel.send(Gw1Embed);
                break;
            case 'gw2':
                message.channel.send(Gw2Embed);
                break;
            case 'bfn':
                message.channel.send(BfNEmbed);
                break;
            case '':
                message.channel.send(HelpEmbed);
                break;
            default:
                message.channel.send(HelpEmbed);
                break;
        }
    }
}
const Discord = require('discord.js');
const { version } = require('../config/config.json');

const RandomHelpEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('Randomizer Commands')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('pvz.gw1plant - Randomly selects a GW1 Plant.\npvz.gw1zombie - Randomly selects a GW1 Zombie.\npvz.gw2plant - Randomly selects a GW2 Plant.\npvz.gw2zombie - Randomly selects a GW2 Zombie.\npvz.bfnplant - Randomly selects a BFN Plant.\npvz.bfnzombie - Randomly selects a BFN Zombie.')
    .addFields(
        { name: 'Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools#randomizer-commands' }
    )
    .setFooter(`Version - ${version}`);

module.exports = {
    name: 'randomizerhelp',
    description: 'Shows randomizer commands.',
    execute(message, args){
        message.channel.send(RandomHelpEmbed);
    }
}
const Discord = require('discord.js');
const { version } = require('../config/config.json');
const Randomizer = require('../functions/randomizer.js');
const { randomgw1zombie } = require('../functions/randomizer.js');

const RandomizerEmbed = new Discord.MessageEmbed()
    .setTitle('Random GW1 Zombie Character')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)

let zom = '<:zombie:722081554851168266>';
module.exports = {
    name: 'gw1zombie',
    description: 'Randomly selects a Garden Warfare 1 Zombie character',
    execute(message, args) {
        let result = randomgw1zombie();
        if (result === 'Foot Soldier' || result === 'Super Commando' || result === 'Arctic Trooper' || result === 'Tank Commander' || result === 'General Supremo' || result === 'Camo Ranger' || result === 'Sky Trooper' || result === 'Centurion')
        {
            RandomizerEmbed.setColor('#ad9940');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result === 'Engineer' || result === 'Welder' || result === 'Mechanic' || result === 'Electrician' || result === 'Plumber' || result === 'Painter' || result === 'Landscaper' || result === 'Sanitation Expert')
        {
            RandomizerEmbed.setColor('#fdaa4a');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('ist') || result === 'Dr. Chester')
        {
            RandomizerEmbed.setColor('#9e1abf');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Star'))
        {
            RandomizerEmbed.setColor('#d03123');
            RandomizerEmbed.setDescription(`${zom} ${result}`)
        }
        message.channel.send(RandomizerEmbed);
    }
}
// <:zombie:722081554851168266> Zombie Icon
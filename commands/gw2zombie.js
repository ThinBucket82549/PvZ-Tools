const Discord = require('discord.js');
const { version } = require('../config.json');
const Randomizer = require('../functions/randomizer.js');
const { randomgw2zombie } = require('../functions/randomizer.js');

const RandomizerEmbed = new Discord.MessageEmbed()
    .setTitle('Random GW2 Zombie Character')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

let zom = '<:zombie:722081554851168266>';
module.exports = {
    name: 'gw2zombie',
    description: 'Randomly selects a Garden Warfare 2 Zombie character',
    execute(message, args) {
        let result = randomgw2zombie();
        if (result === 'Foot Soldier' || result === 'Super Commando' || result === 'Arctic Trooper' || result === 'Tank Commander' || result === 'General Supremo' || result === 'Camo Ranger' || result === 'Sky Trooper' || result === 'Centurion' || result === 'Park Ranger' || result === 'Scuba Soldier')
        {
            RandomizerEmbed.setColor('#ad9940');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result === 'Engineer' || result === 'Welder' || result === 'Mechanic' || result === 'Electrician' || result === 'Plumber' || result === 'Painter' || result === 'Landscaper' || result === 'Sanitation Expert' || result === 'Roadie-Z' || result === 'AC Perry')
        {
            RandomizerEmbed.setColor('#fdaa4a');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('ist'))
        {
            RandomizerEmbed.setColor('#9e1abf');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Star'))
        {
            RandomizerEmbed.setColor('#d03123');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Imp') || result === 'Lil\' Drake')
        {
            RandomizerEmbed.setColor('#e9683b');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Brainz'))
        {
            RandomizerEmbed.setColor('#70328c');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        if (result.includes('Captain'))
        {
            RandomizerEmbed.setColor('#4e566a');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
        }
        message.channel.send(RandomizerEmbed);
    }
}
// <:zombie:722081554851168266>
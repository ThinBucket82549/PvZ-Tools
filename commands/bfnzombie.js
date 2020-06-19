const Discord = require('discord.js');
const { version } = require('../config.json');
const Randomizer = require('../functions/randomizer.js');
const { randomBfnZombie } = require('../functions/randomizer.js');

const RandomizerEmbed = new Discord.MessageEmbed()
    .setTitle('Random BFN Plant Character')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

let zom = '<:zombie:722081554851168266>';
let legend = '<:legendary_upg:722632525796737055>';

module.exports = {
    name: 'bfnzombie',
    description: 'Randomly selects a BFN Zombie character',
    execute(message, args) {
        let result = randomBfnZombie();
        if (result.includes('Foot'))
        {
            RandomizerEmbed.setColor('#ad9940');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722939710397218886/bfn_soldier.png');
        }
        if (result === 'Imp')
        {
            RandomizerEmbed.setColor('#e9683b');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722939873132019752/bfn_imp.png');
        }
        if (result.includes('Super'))
        {
            RandomizerEmbed.setColor('#70328c');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722939952924721343/bfn_super_brainz.png');
        }
        if (result.includes('80'))
        {
            RandomizerEmbed.setColor('#172b4e');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722940046369620108/bfn_action_hero.png');
        }
        if (result.includes('Elec'))
        {
            RandomizerEmbed.setColor('#dc3b82');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722940117500559460/bfn_electric_slide.png');
        }
        if (result.includes('All'))
        {
            RandomizerEmbed.setColor('#d03123');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722940202372432022/bfn_all_star.png');
        }
        if (result.includes('Capt'))
        {
            RandomizerEmbed.setColor('#4e566a');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722940280365645924/bfn_deadbeard.png');
        }
        if (result.includes('Spac'))
        {
            RandomizerEmbed.setColor('#a3867c');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722940359302447154/bfn_space_cadet.png');
        }
        if (result.includes('Scientist'))
        {
            if (result.includes('Steam'))
            {
                RandomizerEmbed.setColor('#9e1abf');
                RandomizerEmbed.setDescription(`${zom} ${result} ${legend}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/690625846666330192/722258725200592966/LegendaryWeaponUpgrade_ScientistDefault_Large.png');
            }
            else
            {
                RandomizerEmbed.setColor('#9e1abf');
                RandomizerEmbed.setDescription(`${zom} ${result}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722940590970634280/bfn_scientist.png');
            }
        }
        if (result.includes('Engi'))
        {
            RandomizerEmbed.setColor('#fdaa4a');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722940667835187261/bfn_engineer.png');
        }
        if (result.includes('Wiz'))
        {
            RandomizerEmbed.setColor('#3160b2');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722940786743836752/bfn_wizard.png');
        }
        message.channel.send(RandomizerEmbed);
    }
}
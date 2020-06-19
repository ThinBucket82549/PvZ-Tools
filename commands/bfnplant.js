const Discord = require('discord.js');
const { version } = require('../config.json');
const Randomizer = require('../functions/randomizer.js');
const { randomBfnPlant } = require('../functions/randomizer.js');

const RandomizerEmbed = new Discord.MessageEmbed()
    .setTitle('Random BFN Plant Character')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

let pla = '<:plant:722081541265686530>';
let legend = '<:legendary_upg:722632525796737055>';

module.exports = {
    name: 'bfnplant',
    description: 'Randomly selects a BFN Plant character',
    execute(message, args) {
        let result = randomBfnPlant();
        if (result.includes('Pea'))
        {
            RandomizerEmbed.setColor('#4da43b');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722937279991250954/bfnpeashooter.png');
        }
        if (result.includes('Chom'))
        {
            RandomizerEmbed.setColor('#5d3b76');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722937362752995419/bfnchomper.png');
        }
        if (result.includes('Kern'))
        {
            if (result.includes('Shogun'))
            {
                RandomizerEmbed.setColor('#fdb559');
                RandomizerEmbed.setDescription(`${pla} ${result} ${legend}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/690625846666330192/722258719995592784/LegendaryWeaponUpgrade_CornDefault_Large.png');
            }
            else
            {
                RandomizerEmbed.setColor('#fdb559');
                RandomizerEmbed.setDescription(`${pla} ${result}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722937560174821436/bfncorn.png');
            }
        }
        if (result.includes('Nigh'))
        {
            RandomizerEmbed.setColor('#c04359');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722938140788129849/bfnnightcap.png');
        }
        if (result.includes('Sna'))
        {
            RandomizerEmbed.setColor('#ee6f21');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722938249827319938/bfnsnapdragon.png');
        }
        if (result.includes('Cac'))
        {
            RandomizerEmbed.setColor('#929d41');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722938487128588429/bfncactus.png');
        }
        if (result.includes('Cit'))
        {
            RandomizerEmbed.setColor('#ff9455');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722938502659965351/bfncitron.png');
        }
        if (result.includes('Aco'))
        {
            RandomizerEmbed.setColor('#5c351b');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722938686651629608/bfnacorn.png');
        }
        if (result.includes('Sun'))
        {
            RandomizerEmbed.setColor('#faa74a');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722938834743984288/bfnsunflower.png');
        }
        if (result.includes('Rose'))
        {
            if (result.includes('Thorn'))
            {
                RandomizerEmbed.setColor('#be2c1f');
                RandomizerEmbed.setDescription(`${pla} ${result} ${legend}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/690625846666330192/722258723057172500/LegendaryWeaponUpgrade_RoseDefault_Large.png');
            }
            else
            {
                RandomizerEmbed.setColor('#be2c1f');
                RandomizerEmbed.setDescription(`${pla} ${result}`);
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/722939042273951844/bfnrose.png');
            } 
        }
        message.channel.send(RandomizerEmbed);
    }
}
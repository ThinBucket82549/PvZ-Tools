const Discord = require('discord.js');
const { version } = require('../config.json');

var bundleName;
var bundleDesc;
var star = '<:rainbowstar:724372673056210945>';

const Rux = new Discord.MessageEmbed()
    .setColor('#fa4cb2')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

module.exports = {
    name: 'ruxbundles',
    description: 'get rux bundles',
    execute(message, args)
    {
        if (args[0] === 'list')
        {
            Rux.setTitle('PvZ BFN Rux Bundles');
            Rux.setDescription('Note: This list is incomplete and may be missing some bundles. If you know of any that aren\'t on the list, you can help out by telling zSupremoz#9248 about them.\n\n'
            + `Bundles\n\nPrimal Acorn Bundle\nSocial Zombie Bundle\nWonderful Wizard Bundle\nWicked Wizard Bundle\nThorn Apart - Upgrade & Costume\nFortunate Nightcap Bundle\nAlluring Pirate Bundle`);
        }
        else if (args[0] === 'Primal' && args[1] === 'Acorn' && args[2] === 'Bundle')
        {
            Rux.setTitle('Primal Acorn Bundle');
            Rux.setDescription(`Cost: ${star} 935\n\n` + 'Contents\nPrimordial Nut (Acorn Costume)\nFurry Flingaminga (Acorn Spectrum Hat)\nGround Spinny (Acorn Gesture)\nAcorn Overload (Acorn Costume)');
        }
        else if (args[0] === 'Social' && args[1] === 'Zombie' && args[2] === 'Bundle')
        {
            Rux.setTitle('Social Zombie Bundle');
            Rux.setDescription(`Cost: ${star} 1410\n\n` + 'Contents\nThrone of Spoons (Victory Slab)\nBiggest Burger (Victory Slab)\nCool Your Heels (Electric Slide Gesture)\nJackhammer Jam (Engineer Gesture)\nAerospace Aerobics (Space Cadet Gesture)\n'
            + 'Ammo Eater (Foot Soldier Gesture)\nSinging for Science (Scientist Gesture)\nDisco Bricks (Victory Slab)\nDr. Zomboss Crying (Expression)\nDr. Zomboss Happy (Expression)\nDr. Zomboss Scared (Expression)\nDr. Zomboss Angry (Expression)\nSmile (Expression)\nExploding Imp (Expression)\nWrecking Ball (Expression)\nMeteoric (Punchers)\nFists of Punk (Punchers)');
        }
        else if (args[0] === 'Wonderful' && args[1] === 'Wizard' && args[2] === 'Bundle')
        {
            Rux.setTitle('Wonderful Wizard Bundle');
            Rux.setDescription(`Cost: ${star} 1750\n\n` + 'Contents\nFairy Step-Oddmother (Wizard Costume)\nGrand Elf (Wizard Costume)\nFore Sight (Wizard Gesture)\nMagic Show-Off Set (Wizard Item Set)');
        }
        else if (args[0] === 'Wicked' && args[1] === 'Wizard' && args[2] === 'Bundle')
        {
            Rux.setTitle('Wicked Wizard Bundle');
            Rux.setDescription(`Cost: ${star} 1760\n\n` + 'Contents\nLast Wishez (Wizard Costume)\nSnore-cerer (Wizard Costume)\nStaff Swign (Wizard Gesture)\nGem of the Stinky Eye Set (Wizard Item Set)');
        }
        else if (args[0] === 'Thorn' && args[1] === 'Apart' && args[2] === '-' && args[3] === 'Upgrade' && args[4] === '&' && args[5] === 'Costume')
        {
            Rux.setTitle('Thorn Apart - Upgrade & Costume');
            Rux.setDescription(`Cost: ${star} 975\n\n` + 'Contents\nCelestial Beauty (Rose Costume)\nThorn Apart (Rose Legendary Upgrade)');
        }
        else if (args[0] === 'Fortunate' && args[1] === 'Nightcap' && args[2] === 'Bundle')
        {
            Rux.setTitle('Fortunate Nightcap Bundle');
            Rux.setDescription(`Cost: ${star} 1600\n\n` + 'Contents\nFortune Cap (Night Cap Costume)\nJurassic Jammies (Night Cap Costume)\nStarfruit Fighter Set (Night Cap Item Set)');
        }
        else if (args[0] === 'Alluring' && args[1] === 'Pirate' && args[2] === 'Bundle')
        {
            Rux.setTitle('Alluring Pirate Bundle');
            Rux.setDescription(`Cost: ${star} 1750\n\n` + 'Contents\nA Koi Matey (Captain Deadbeard Hat)\nCut Lass (Captain Deadbeard Costume)\nMap Check (Captain Deadbeard Gesture)')
        }
        else
        {
            Rux.setTitle('Invalid Bundle Name');
            Rux.setDescription('Please refer to pvz.ruxbundles list');
        }
        message.channel.send(Rux);
    }
}
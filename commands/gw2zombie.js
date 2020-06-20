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
            if (result.includes('Foot'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723884992031227984/soldier.png');
            if (result.includes('Super'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723885009047388210/supercommando.png');
            if (result.includes('Arctic'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723885027116711936/arctictrooper.png');
            if (result.includes('Tank'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723885048343953428/tankcommander.png');
            if (result.includes('General'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723885059492413440/generalsupremo.png');
            if (result.includes('Camo'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723886233264324618/camoranger.png');
            if (result.includes('Sky'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723886331285209088/skytrooper.png');
            if (result.includes('Centur'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723886428752183296/centurion.png');
            if (result.includes('Park'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723886524042575922/parkranger.png');
            if (result.includes('Scuba'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723886543558934610/scuba.png');
        }
        if (result === 'Engineer' || result === 'Welder' || result === 'Mechanic' || result === 'Electrician' || result === 'Plumber' || result === 'Painter' || result === 'Landscaper' || result === 'Sanitation Expert' || result === 'Roadie-Z' || result === 'AC Perry')
        {
            RandomizerEmbed.setColor('#fdaa4a');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            if (result.includes('Engi'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723887322780663848/engineer.png');
            if (result.includes('Wel'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723887407254208572/welder.png');
            if (result.includes('Mech'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723887514066223104/mechanic.png');
            if (result.includes('Electr'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723887574724378644/electrician.png');
            if (result.includes('Plu'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723887706903412816/plumber.png');
            if (result.includes('Pain'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723887845642731580/painter.png');
            if (result.includes('Landsca'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723887899300593714/landscaper.png');
            if (result.includes('Sanitation'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723888065562542130/sanitationexpert.png');
            if (result.includes('Road'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723888148823670794/roadiez.png');
            if (result.includes('AC'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723888274510446652/acperry.png');
        }
        if (result.includes('ist'))
        {
            RandomizerEmbed.setColor('#9e1abf');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            if (result.includes('Sci'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723888376930893844/scientist.png');
            if (result.includes('Marine'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723888522217390090/marinebio.png');
            if (result.includes('Phys'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723888648411676782/physicist.png');
            if (result.includes('Dr.'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723888736818954250/drtoxic.png');
            if (result.includes('Astronaut'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723888855505174638/astronaut.png');
            if (result.includes('Chemist'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723888953551224862/chemist.png');
            if (result.includes('Arche'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723889058748825600/archeologist.png');
            if (result.includes('Paleo'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723889170443010058/paleontologist.png');
            if (result.includes('Zoo'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723889314412625931/zoologist.png');
            if (result.includes('Computer'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723889500903964672/computerscientist.png');
        }
        if (result.includes('Star'))
        {
            RandomizerEmbed.setColor('#d03123');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            if (result === 'All-Star')
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722394865253613569/723890335297831062/allstar.png');
            if (result.includes('Crick'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723890402393980958/cricketstar.png');
            if (result.includes('Hockey'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723890541154009119/hockeystar.png');
            if (result.includes('Goalie'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723890736453517356/goaliestar.png');
            if (result.includes('Rugby'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723890858038132786/rugby.png');
            if (result.includes('Baseball'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723890998350053376/baseballstar.png');
            if (result.includes('Wrestl'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723891144303575100/wrestling.png');
            if (result.includes('Golf'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723891360020693012/golfstar.png');
            if (result.includes('Tennis'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723891485405347900/tennis.png');
            if (result.includes('Moto-X'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723891578904510504/motoxstar.png');
        }
        if (result.includes('Imp') || result === 'Lil\' Drake')
        {
            RandomizerEmbed.setColor('#e9683b');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            if (result === 'Imp')
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723891696810721300/imp.png');
            if (result.includes('Lil'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723891807506792525/drake.png');
            if (result.includes('Pylon'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723891898758201434/pylon.png');
            if (result.includes('S.H.R'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723891988780417054/shrimp.png');
            if (result.includes('Party'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723892087787094016/partyimp.png');
            if (result.includes('Scally'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723892276392230962/scallywag.png');
            if (result.includes('Z7'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723892363189288970/z7imp.png');
        }
        if (result.includes('Brainz'))
        {
            RandomizerEmbed.setColor('#70328c');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            if (result === 'Super Brainz')
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723892455937802250/superbrainz.png');
            if (result.includes('Electro'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723892575165087827/electrobrainz.png');
            if (result.includes('Cozmic'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723892684124848188/cozmic.png');
            if (result.includes('Toxic'))
                Randomizer.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723892811132567573/toxicbrainz.png');
            if (result.includes('Party'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723893308597731368/partybrainz.png');
            if (result.includes('Breakfast'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723893416899117116/breakfast.png');
        }
        if (result.includes('Captain'))
        {
            RandomizerEmbed.setColor('#4e566a');
            RandomizerEmbed.setDescription(`${zom} ${result}`);
            if (result.includes('Deadbeard'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723893620360347769/deadbeard.png');
            if (result.includes('Cannon'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723893698240315392/cannon.png');
            if (result.includes('Flame'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723893771615338586/flameface.png');
            if (result.includes('Shark'));
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723893831493353552/sharkbite.png');
            if (result.includes('Party'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723894145017577572/partyman.png');
            if (result.includes('Squawk'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723894237401317447/squawk.png');
        }
        message.channel.send(RandomizerEmbed);
    }
}
// <:zombie:722081554851168266>
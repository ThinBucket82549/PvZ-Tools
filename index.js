const Discord = require('discord.js');
const { prefix, token, version } = require('./config/config.json');
const Randomizer = require('./functions/randomizer.js');
const Calc = require('./functions/conversions.js');
const client = new Discord.Client();

const InfoEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('About PvZ Tools')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('A Plants vs. Zombies bot created by zSupremoz. With it you can perform PvZ related tasks such as randomly selecting a character, calculating XP for Prize Bulbs (and vice versa), and check in game events.')
    .addFields(
        { name: 'Source', value: 'https://github.com/zSupremoz/PvZ-Tools' },
        { name: 'Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools/tree/master#pvz-tools' }
    )
    .setFooter(`Version - ${version}`);

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('pvz.help');
});

client.login(token);

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    switch (command)
    {
        case 'help':
            message.channel.send('Help Commands:\n[Randomizer Help] -  pvz.randomizer\n[Calculator Help] - pvz.calc\n[Information] - pvz.info\n[Check GW2 and BFN Events] - pvz.events');
            break;
        case 'randomizer':
            message.channel.send('pvz.gw1plant - Randomly selects a GW1 Plant.\npvz.gw1zombie - Randomly selects a GW1 Zombie.\npvz.gw2plant - Randomly selects a GW2 Plant.\npvz.gw2zombie - Randomly selects a GW2 Zombie.\npvz.bfnplant - Randomly selects a BFN Plant.\npvz.bfnzombie - Randomly selects a BFN Zombie.');
            break;
        case 'calc':
            message.channel.send('pvz.tobulb [xp] - Takes the amount of specified XP and converts them to Prize Bubls.\npvz.toxp [bulbs] - Takes the amount of specified Prize Bulbs and converts them to XP.');
            break;
        case 'info':
            message.channel.send(InfoEmbed);
            break;
        case 'gw1plant':
            message.channel.send('<:plant:722081541265686530> ' + Randomizer.randomgw1plant());
            break;
        case 'gw1zombie':
            message.channel.send('<:zombie:722081554851168266> ' + Randomizer.randomgw1zombie());
            break;
        case 'gw2plant':
            message.channel.send('<:plant:722081541265686530> ' + Randomizer.randomgw2plant());
            break;
        case 'gw2zombie':
            message.channel.send('<:zombie:722081554851168266> ' + Randomizer.randomgw2zombie());
            break;
        case 'bfnplant':
            message.channel.send('<:plant:722081541265686530> ' + Randomizer.randomBfnPlant());
            break;
        case 'bfnzombie':
            message.channel.send('<:zombie:722081554851168266> ' + Randomizer.randomBfnZombie());
            break;
        case 'tobulb':
            var xp = args[0];
            message.channel.send('Prize Bulbs - ' + Calc.ConvertToPrizeBulb(xp) + ' <:prizebulb:721918291400196126>');
            break;
        case 'toxp':
            var bulbs = args[0];
            message.channel.send('XP - ' + Calc.ConvertToXp(bulbs) + ' <:xp:722080853869592648>');
            break;
        case 'events':
            message.channel.send('Current GW2 Mystery Portal Event - None.\nCurrent BFN Weekly Event - "Cool Explosions Only". Ends on Teusday, June 20th (2:15 PM EST).');
            break;
        default:
            message.channel.send('Unknown command. Please refer to !pvz help.');
            break;
    }
})
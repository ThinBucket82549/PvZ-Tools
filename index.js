const Discord = require('discord.js');
const { prefix, token, version } = require('./config/config.json');
const Randomizer = require('./functions/randomizer.js');
const Calc = require('./functions/conversions.js');
const client = new Discord.Client();

const InfoEmbed = new Discord.MessageEmbed()
    .setColor('#5d38a9')
    .setTitle('About PvZ Tools')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('A Plants vs. Zombies bot created by zSupremoz. With it you can randomly select characters from any Platns vs. Zombies Shooter game and calculate the XP needed for some Prize Bulbs (and vice versa).')
    .addFields(
        { name: 'Source', value: 'https://github.com/zSupremoz/PvZ-Tools' }
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

    //help commands
    if (command === 'help')
        message.channel.send('Help Options:\n[Randomizer Help] -  pvz.randomizer\n[Calculator Help] - pvz.calc\n[Information] - pvz.info');
    else if (command === 'randomizer')
        message.channel.send('pvz.gw1plant - Randomly selects a GW1 Plant.\npvz.gw1zombie - Randomly selects a GW1 Zombie.\npvz.gw2plant - Randomly selects a GW2 Plant.\npvz.gw2zombie - Randomly selects a GW2 Zombie.\npvz.bfnplant - Randomly selects a BFN Plant.\npvz.bfnzombie - Randomly selects a BFN Zombie.')
    else if (command === 'calc')
        message.channel.send('pvz.tobulb [xp] - Takes the amount of specified XP and converts them to Prize Bubls.\npvz.toxp [bulbs] - Takes the amount of specified Prize Bulbs and converts them to XP.')
    else if (command === 'info')
        message.channel.send(InfoEmbed);
    //Randomizers
    else if (command === 'gw1plant')
        message.channel.send('<:plant:722081541265686530> ' + Randomizer.randomgw1plant());
    else if (command === 'gw1zombie')
        message.channel.send('<:zombie:722081554851168266> ' + Randomizer.randomgw1zombie());
    else if (command === 'gw2plant')
        message.channel.send('<:plant:722081541265686530> ' + Randomizer.randomgw2plant());
    else if (command === 'gw2zombie')
        message.channel.send('<:zombie:722081554851168266> ' + Randomizer.randomgw2zombie());
    else if (command === 'bfnplant')
        message.channel.send('<:plant:722081541265686530> ' + Randomizer.randomBfnPlant());
    else if (command === 'bfnzombie')
        message.channel.send('<:zombie:722081554851168266> ' + Randomizer.randomBfnZombie());
    //Calculator
    else if (command === 'tobulb') {
        var xp = args[0];
        message.channel.send('Prize Bulbs - ' + Calc.ConvertToPrizeBulb(xp) + ' <:prizebulb:721918291400196126>');
    }
    else if (command === 'toxp') {
        var bulbs = args[0];
        message.channel.send('XP - ' + Calc.ConvertToXp(bulbs) + ' <:xp:722080853869592648>');
    }
    //Unknown command
    else
       message.channel.send('Unknown command. Please refer to !pvz help.');
})
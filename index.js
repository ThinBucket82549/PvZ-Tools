const Discord = require('discord.js');
const { prefix, token, version } = require('./config/config.json');
const Randomizer = require('./functions/randomizer.js');
const Calc = require('./functions/conversions.js');
const client = new Discord.Client();

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('pvz.help', { type: "LISTENING"});
});

client.login(token);

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    switch (command)
    {
        case 'help':
            client.commands.get('help').execute(message, args);
            break;
        case 'randomizer':
            client.commands.get('randomizerhelp').execute(message, args);
            break;
        case 'calc':
            client.commands.get('calchelp').execute(message, args);
            break;
        case 'info':
            client.commands.get('botinfo').execute(message, args);
            break;
        case 'gw1plant':
            message.channel.send('<:plant:722081541265686530> ' + Randomizer.randomgw1plant())
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
        case 'gw2events':
            client.commands.get('gw2events').execute(message, args);
            break;
        case 'bfnevents':
            client.commands.get('bfnevents').execute(message, args);
            break;
        default:
            message.channel.send('Unknown command. Please refer to !pvz help.');
            break;
    }
})
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
    console.log('PvZ Tools is Online!');
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
            client.commands.get('gw1plant').execute(message, args);
            break;
        case 'gw1zombie':
            client.commands.get('gw1zombie').execute(message, args);
            break;
        case 'gw2plant':
            client.commands.get('gw2plant').execute(message, args);
            break;
        case 'gw2zombie':
            client.commands.get('gw2zombie').execute(message, args);
            break;
        case 'bfnplant':
            client.commands.get('bfnplant').execute(message, args);
            break;
        case 'bfnzombie':
            client.commands.get('bfnzombie').execute(message, args);
            break;
        case 'tobulb':
            client.commands.get('tobulb').execute(message, args);
            break;
        case 'toxp':
            client.commands.get('toxp').execute(message, args);
            break;
        case 'gw2events':
            client.commands.get('gw2events').execute(message, args);
            break;
        case 'bfnevents':
            client.commands.get('bfnevents').execute(message, args);
            break;
        case 'bfnupgs':
            client.commands.get('bfnupgrades').execute(message, args);
            break;
        case 'botchangelog':
            client.commands.get('botchanges').execute(message, args);
            break;
        case 'botchangelogs':
            client.commands.get('botchanges').execute(message, args);
            break;    
        default:
            message.channel.send('Unknown command. Please refer to pvz.help.');
            break;
    }
})
const Discord = require('discord.js');
const { prefix, token, version } = require('./config.json');
const client = new Discord.Client();

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

let statuses = ['pvz.help', 'pvz.support', 'v1.8.0!', 'by zSupremoz!'];

client.once('ready', () => {
    console.log(`PvZ Tools ${version} is Online!`);
    client.user.setActivity('pvz.help', { type: "LISTENING"});
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "LISTENING"});
    }, 10000)
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
        case 'mysteryportal':
            client.commands.get('gw2events').execute(message, args);
            break;
        case 'weeklyevent':
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
        case 'nextkey':
            client.commands.get('nextkey').execute(message, args);
            break;
        case 'rux':
            client.commands.get('ruxleaves').execute(message, args);
            break;
        case 'prizemap':
            client.commands.get('prizemap').execute(message, args);
            break;
        case 'eventdata':
            client.commands.get('eventlist').execute(message, args);
            break;
        case 'challenges':
            client.commands.get('charchallenges').execute(message, args);
            break;
        case 'todo':
            client.commands.get('todo').execute(message, args);
            break;
        case 'support':
            client.commands.get('support').execute(message, args);
            break;
        case 'arena':
            client.commands.get('battlearena').execute(message, args);
            break;
        case 'gw1gamemode':
            client.commands.get('gw1gamemode').execute(message, args);
            break;
        case 'gw2gamemode':
            client.commands.get('gw2gamemode').execute(message, args);
            break;
        case 'bfngamemode':
            client.commands.get('bfngamemode').execute(message, args);
            break;
        case 'ruxbundles':
            client.commands.get('ruxbundles').execute(message, args);
            break;
        case 'trivia':
            client.commands.get('trivia').execute(message, args);
            break;
        default:
            client.commands.get('unk').execute(message, args);
            break;
    }
})
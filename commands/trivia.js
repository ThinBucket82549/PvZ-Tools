const Discord = require('discord.js');
const { version } = require('../config.json');

const TriviaDesc = new Discord.MessageEmbed()
    .setColor('#805304')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('Welcome to PvZ Tool\'s Trivia. If you\'d like to test your PvZ knowledge, try one of the commands below.\n(Please note that only the person who starts the trivia can answer the question)')
    .addFields(
        {name: 'Trivia Commands', value: 'pvz.trivia pvz1\n\n(More to follow later whenever I come up with questions :p)'}
    )
    .setFooter(`Version - ${version}`)
    .setTimestamp();

const TriviaQ = new Discord.MessageEmbed()
    .setColor('#805304')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

const TriviaR = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('Good Job! You answered the question correctly!')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

const TriviaW = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setDescription('Sorry, you didn\'t answer the question correctly. Better luck next time.')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

//Total PvZ 1 Questions - 1
let pvzquestions = 9;
//Total PvZ 2 Questions - 1
let pvz2questions = 9;

module.exports = {
    name: 'trivia',
    description: 'pvz trivia',
    async execute(message, args) {

        //PvZ 1 Trivia
        if (args[0] === 'pvz1')
        {
            TriviaQ.setTitle('Plants vs. Zombies 1 Trivia');
            let q = Math.floor(Math.random() * (pvzquestions + 1));

            switch (q)
            {
                //Q: What is the 4th Plant you unlock in Adventure Mode? A: Wall-nut
                case 0:
                    TriviaQ.setDescription("What is the 4th Plant you unlock in Adventure Mode? (Answer in 15 Seconds)");
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "Wall-nut" || msgs.first().content == "Wall-Nut" || msgs.first().content == "Wallnut" || msgs.first().content == "wallnut" || msgs.first().content == "wall-nut")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                //Q: What's the name of the minigame where you have a rematch against Dr. Zomboss? A: Dr. Zomboss's Revenge
                case 1:
                    TriviaQ.setDescription("What's the name of the minigame where you have a rematch against Dr. Zomboss? (Answer in 15 seconds)");
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "Dr. Zomboss\'s Revenge" || msgs.first().content == "dr. zomboss\'s revenge" || msgs.first().content == "dr zomboss\'s revenge")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                //Q: Which level do you need to complete to unlock Torchwood? A: 3-7
                case 2:
                    TriviaQ.setDescription("Which level do you need to complete to unlock Torchwood? (Answer if 15 seconds)");
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "3-7")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                //Q: How much coins does the Golden Watering Can cost at Crazy Dave's Twiddydinkies? A: 10,000
                case 3:
                    TriviaQ.setDescription("How much coins does the Golden Watering Can cost at Crazy Dave's Twiddydinkies? (Answer in 15 seconds)")
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "10000" || msgs.first().content == "10,000")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                //Q: How much coins does Pool Cleaners cost at Crazy Dave's Twiddydinkies? A: 1,000
                case 4:
                    TriviaQ.setDescription("How much coins does Pool Cleaners cost at Crazy Dave's Twiddydinkies? (Answer in 15 seconds)")
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "1000" || msgs.first().content == "1,000")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                // Q: Which level do you need to complete to unlock Magnet Shroom? A: 4-8
                case 5:
                    TriviaQ.setDescription("Which level do you need to complete to unlock Magnet Shroom? (Answer in 15 seconds)")
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "4-8")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                // Q: Which level do you need to complete to unlock Umbrella Leaf? A: 5-6
                case 6:
                    TriviaQ.setDescription("Which level do you need to complete to unlock Umbrella Leaf? (Answer in 15 seconds)")
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "5-6")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                //Q: What's the name of the zombie that travels to the far left side of the lawn only to make his way back? A: Digger Zombie
                case 7:
                    TriviaQ.setDescription("What's the name of the zombie that travels to the far left side of the lawn only to make his way back? (Answer in 15 seconds)")
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "Digger Zombie" || msgs.first().content == "Digger" || msgs.first().content == "digger zombie" || msgs.first().content == "digger")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                //Q: What gamemode does the Trashcan Zombie appear in? A: Versus
                case 8:
                    TriviaQ.setDescription("What gamemode does the Trashcan Zombie appear in? (Answer in 15 seconds)")
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "Versus" || msgs.first().content == "Versus Mode" || msgs.first().content == "versus" || msgs.first().content == "versus mode")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                //Q: Which level can a user play up to if they own the Free Trial version of the game?
                case 9:
                    TriviaQ.setDescription("Which level can a user play up to if they own the Free Trial version of the game? (Answer in 15 seconds)")
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "3-4")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
            }
        }
        /*
        else if (args[0] === 'pvz2')
        {
            TriviaQ.setTitle('Plants vs. Zombies 2 Trivia');
            let q = Math.floor(Math.random() * (pvz2questions + 1));
            switch(q)
            {
                //Q: How many worlds were available when PvZ 2 was released? A: 3
                case 0:
                    TriviaQ.setDescription("How many worlds were available when PvZ 2 was released? (Answer in 15 Seconds)");
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "3")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                case 1:
                    TriviaQ.setDescription("What was the 5th world that was made available? (Answer in 15 Seconds)");
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "Dark Ages" || msgs.first().content == "dark ages")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                case 2:
                    TriviaQ.setDescription("What's the name of the Plant that requires you to use Sun for an attack?");
                    message.channel.send(TriviaQ);
                    try {
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id===message.author.id, { time: 15000, max: 1, errors: "time"})
                        if (msgs.first().content == "Magnifying Grass" || msgs.first().content == "magnifying grass")
                            message.channel.send(TriviaR);
                        else
                            message.channel.send(TriviaW);
                    }
                    catch(e) {
                        message.channel.send("You didn't answer in time.");
                    }
                    break;
                //
                case 3:
                    TriviaQ.setDescription("");
                    break;
                case 4:
                    break;
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                case 8:
                    break;
                case 9:
                    break;
            }
        }
        */
        else
            message.channel.send(TriviaDesc);
    }
}
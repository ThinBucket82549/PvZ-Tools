const Discord = require('discord.js');
const { version } = require('../config.json');
const Randomizer = require('../functions/randomizer.js');
const { randomgw2plant } = require('../functions/randomizer.js');

const RandomizerEmbed = new Discord.MessageEmbed()
    .setTitle('Random GW2 Plant Character')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

let pla = '<:plant:722081541265686530>';

module.exports = {
    name: 'gw2plant',
    description: 'Randomly selects a Garden Warfare 2 Plant character',
    execute(message, args) {
        let result = randomgw2plant();
        if (result.includes("Pea"))
        {
            RandomizerEmbed.setColor('#4da43b');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            if (result.includes("Peashooter"))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723861997078315098/pea.png');
            if (result.includes("Fire"))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723862076774154240/firepea.png');
            if (result.includes('Ice'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723862241740455987/icepea.png');
            if (result.includes('Toxic'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723862809884098631/toxicpea.png');
            if (result.includes('Commando'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723863249401151499/commandopea.png');
            if (result.includes('Agent'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723863385904513105/agentpea.png');
            if (result.includes('Law'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722394865253613569/723863723344658552/lawpea.png');
            if (result.includes('Plasma'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722394865253613569/723863740638036058/plasmapea.png');
            if (result.includes('Rock'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722394865253613569/723863760904781874/rockpea.png');
            if (result.includes('Electro'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722394865253613569/723863781871976498/electropea.png');
        }
        if (result.includes("Chomp"))
        {
            RandomizerEmbed.setColor('#5d3b76');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            if (result === "Chomper")
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722394865253613569/723864560242524171/chomper.png');
            if (result.includes('Fire'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723864681483206666/firechomper.png');
            if (result.includes('Hot'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723864958273847327/hotrodchomper.png');
            if (result.includes('Power'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723865059478077480/powerchomper.png');
            if (result.includes('Count'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723865199563636797/countchompula.png');
            if (result.includes('Toxic'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723865418556768326/toxicchomper.png');
            if (result.includes('Armor'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723865417315254293/armorchomper.png');
            if (result.includes('Thing'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723865582621032508/chompthing.png');
            if (result.includes('Yeti'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723865615986589766/yetichomper.png');
            if (result.includes('Disco'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723865627013414942/discochomper.png');
            if (result.includes('Unic'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723865637235195904/unicornchomper.png');
            if (result.includes('Twilight'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723865647297200218/twilightchomper.png');
        }
        if (result.includes("lower") || result === 'Metal Petal' || result === 'Sun Pharaoh')
        {
            RandomizerEmbed.setColor('#faa74a');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            if (result === 'Sunflower')
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722394865253613569/723866535638204436/sunflower.png');
            if (result.includes('Fire'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722394865253613569/723866647877648454/fireflower.png');
            if (result.includes('Power'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723866725619204096/powerflower.png');
            if (result.includes('Shadow'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723866887540441160/shadowflower.png');
            if (result.includes('Mystic'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723867026380030002/mystic.png');
            if (result === 'Metal Petal')
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723867202901508116/metalpetal.png');
            if (result === 'Sun Pharaoh')
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723867344027516948/sunpharaoh.png');
            if (result.includes('Alien'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723867449186975754/alienflower.png');
            if (result.includes('Vampire'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723867591206109244/vampireflower.png');
            if (result.includes('Stuffy'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723867703583965224/stuffyflower.png');
        }
        if (result.includes("Cactus"))
        {
            RandomizerEmbed.setColor('#929d41');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            if (result === 'Cactus')
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723868072682848276/cactus.png');
            if (result.includes('Fire'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723868203238948904/firecactus.png');
            if (result.includes('Ice'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723868303272968192/icecactus.png');
            if (result.includes('Power'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723868381115318283/powercactus.png');
            if (result.includes('Future'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723868491891081216/futurecactus.png');
            if (result.includes('Camo'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723868628646232074/camocactus.png');
            if (result.includes('Bandit'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723868650486104064/banditcactus.png');
            if (result.includes('Jade'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723868661525250048/jadecactus.png');
            if (result.includes('Petrif'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723868885434105936/petrifiedcactus.png');
            if (result.includes('Zen'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723868902852919346/zencactus.png');
        }
        if (result.includes("Citron"))
        {
            RandomizerEmbed.setColor('#ff9455');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            if (result === 'Citron')
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723869397617344562/citron.png');
            if (result.includes('Froz'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723869501573169214/frozencitron.png');
            if (result.includes('Electro'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723869626332741672/electrocitron.png');
            if (result.includes('Iron'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723869753734856725/ironcitron.png');
            if (result.includes('Party'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723869935310340126/partycitron.png');
            if (result.includes('Toxi'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723870033276829696/toxiccitron.png');
        }
        if (result.includes("Rose"))
        {
            RandomizerEmbed.setColor('#be2c1f');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            if (result === 'Rose')
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723870195197935676/rose.png');
            if (result.includes('Druid'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723870349963558974/druidrose.png');
            if (result.includes('Fire'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723870434738569266/firerose.png');
            if (result.includes('Frost'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723870571191861258/frostrose.png');
            if (result.includes('Party'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723870663659618304/partyrose.png');
            if (result.includes('Nec'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723870731519131648/necrose.png');
        }
        if (result.includes("Corn") || result === "Mob Cob")
        {
            RandomizerEmbed.setColor('#fdb559');
            RandomizerEmbed.setDescription(`${pla} ${result}`);
            if (result.includes('Kernel'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723870093720944691/corn.png');
            if (result.includes('BBQ'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723871147896209499/bbqcorn.png');
            if (result.includes('Mob'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723871263759663135/mobcob.png');
            if (result.includes('Pops'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723871341723254824/popscorn.png');
            if (result.includes('Party'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723871438125269052/partycorn.png');
            if (result.includes('Commando'))
                RandomizerEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/723871569679745064/commandocorn.png');
        }
        message.channel.send(RandomizerEmbed);
    }
}
//<:plant:722081541265686530>
const Discord = require('discord.js');
const { version } = require('../config.json');

const UpgradesEmbed = new Discord.MessageEmbed()
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`)
    .setTimestamp();

let upgpt = '<:upg:722549190097371237>';
let legupg = '<:legendary_upg:722632525796737055>';
module.exports = {
    name: 'bfnupgrades',
    description: 'Shows BFN upgrades',
    execute(message, args){
        if (args[0] === 'Peashooter' || args[0] === 'peashooter')
        {
            UpgradesEmbed.setColor('#4da43b');
            UpgradesEmbed.setTitle('Peashooter Upgrades');
            UpgradesEmbed.setDescription('Combo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\n'
            + 'Low Life\t<:upg:722549190097371237>1\nPro Spitter\t<:upg:722549190097371237>1\nReload Gatling\t<:upg:722549190097371237>2\nLast Ditch\t<:upg:722549190097371237>2\n'
            + 'Leveling Up\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nCombat Adrenaline\t<:upg:722549190097371237>3\n'
            + 'Explosive Gatling\t<:upg:722549190097371237>3\nHoming Pea\t<:upg:722549190097371237>3\nBean Party\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\n'
            + 'Vampiric\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nEscape Roots\t<:upg:722549190097371237>3\nFeed the Beast\t<:upg:722549190097371237>4\n'
            + 'Party Time\t<:upg:722549190097371237>5');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Chomper' || args[0] === 'chomper')
        {
            UpgradesEmbed.setColor('#5d3b76');
            UpgradesEmbed.setTitle('Chomper Upgrades');
            UpgradesEmbed.setDescription('Combo\t<:upg:722549190097371237>1\nFace Bite\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\n'
            + 'Upset Stomach\t<:upg:722549190097371237>2\nVampire Spikeweek\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nWell Fed\t<:upg:722549190097371237>3\n'
            + 'Hailtosis\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nSymbiosis\t<:upg:722549190097371237>3\nChomp Thing\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\n'
            + 'Dirt Bath\t<:upg:722549190097371237>4\nMastication\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if ((args[0] == 'Kernel' && args[1] == 'Corn')|| (args[0] === 'kernel' && args[1] === 'corn'))
        {
            UpgradesEmbed.setColor('#fdb559');
            UpgradesEmbed.setTitle('Kernel Corn Upgrades');
            UpgradesEmbed.setDescription('Combo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\n'
            + '20/10\t<:upg:722549190097371237>2\nHappy Feet\t<:upg:722549190097371237>2\nRapid Recond\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\n'
            + 'Buttered Branches\t<:upg:722549190097371237>3\nHopscotch\t<:upg:722549190097371237>3\nRe-Corn-naissance\t<:upg:722549190097371237>3\nSuper Spin\t<:upg:722549190097371237>3\nMob Cobs\t<:upg:722549190097371237>3\nReaping Leap\t<:upg:722549190097371237>3\n'
            + 'Speedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nCornucopia\t<:upg:722549190097371237>3\n<:legendary_upg:722632525796737055>Shogun-Guard\t<:upg:722549190097371237>5');
            message.channel.send(UpgradesEmbed);
        }
        else if ((args[0] === 'Night' && args[1] === 'Cap') || (args[0] === 'night' && args[1] === 'cap'))
        {
            UpgradesEmbed.setColor('#c04359');
            UpgradesEmbed.setTitle('Night Cap Upgrades');
            UpgradesEmbed.setDescription('Combo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\n'
            + 'Incubate\t<:upg:722549190097371237>2\nShadow Sling\t<:upg:722549190097371237>2\nPiercing Power\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\n'
            + 'Parkour\t<:upg:722549190097371237>3\nShadow Tribute\t<:upg:722549190097371237>3\nFleet Footed\t<:upg:722549190097371237>3\nSpore-ratic\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\n'
            + 'Clear Coating\t<:upg:722549190097371237>3\nCorrode\t<:upg:722549190097371237>4\nUppercut\t<:upg:722549190097371237>5');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Snapdragon' || args[0] === 'snapdragon')
        {
            UpgradesEmbed.setColor('#ee6f21');
            UpgradesEmbed.setTitle('Snapdragon Upgrades');
            UpgradesEmbed.setDescription('Combo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\n'
            + 'Heat Seeking\t<:upg:722549190097371237>2\nExcellent Accelerant\t<:upg:722549190097371237>2\nEngulf\t<:upg:722549190097371237>2\nCoolant\t<:upg:722549190097371237>2\nQuake\t<:upg:722549190097371237>2\nRadiate\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\n'
            + 'Critical Blow\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nVentilation\t<:upg:722549190097371237>3\nCampfire\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nIncendiary\t<:upg:722549190097371237>4'
            + 'Backdraft\t<:upg:722549190097371237>4\n');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Cactus' || args[0] === 'cactus')
        {
            UpgradesEmbed.setColor('#929d41');
            UpgradesEmbed.setTitle('Cactus Upgrades');
            UpgradesEmbed.setDescription('Refreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nSpud Spotting\t<:upg:722549190097371237>2\nBest Defence\t<:upg:722549190097371237>2\nSpotlight\t<:upg:722549190097371237>2\nHealth Regeneration\t<:upg:722549190097371237>2\n'
            + 'Health Regeneration Delay\t<:upg:722549190097371237>2\nPressure Point\t<:upg:722549190097371237>2\nAlacrity\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nMirage\t<:upg:722549190097371237>3\nFallback\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\n'
            + 'Bon Voyage\t<:upg:722549190097371237>3\nLooting\t<:upg:722549190097371237>3\nCalibrated\t<:upg:722549190097371237>4\nPopcorn\t<:upg:722549190097371237>4\nAdrenaline Rush\t<:upg:722549190097371237>4\nSustenance\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Citron' || args[0] === 'citron')
        {
            UpgradesEmbed.setColor('#ff9455');
            UpgradesEmbed.setTitle('Citron Upgrades');
            UpgradesEmbed.setDescription('Emergency Exit\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nQuenching Cover\t<:upg:722549190097371237>2\nBest Defence\t<:upg:722549190097371237>2\nHealth Regeneration\t<:upg:722549190097371237>2\n'
            + 'Health Regeneration Delay\t<:upg:722549190097371237>2\nFreshly Squeezed\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nKinetic Energy\t<:upg:722549190097371237>3\nPeel Out\t<:upg:722549190097371237>3\nPeached\t<:upg:722549190097371237>3\nJuiced\t<:upg:722549190097371237>3\nFallback\t<:upg:722549190097371237>3\n'
            + 'Speedy\t<:upg:722549190097371237>3\nBowling\t<:upg:722549190097371237>4\nPulp Powered\t<:upg:722549190097371237>4\nPeachy\t<:upg:722549190097371237>4\nAdrenaline Rush\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Acorn' || args[0] === 'acorn')
        {
            UpgradesEmbed.setColor('#5c351b');
            UpgradesEmbed.setTitle('Acorn Upgrades');
            UpgradesEmbed.setDescription('Refreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLog Jam\t<:upg:722549190097371237>1\nMolasses\t<:upg:722549190097371237>2\nNatural 20\t<:upg:722549190097371237>2\nBest Defence\t<:upg:722549190097371237>2\nLittle Friend\t<:upg:722549190097371237>2\nHealth Regeneration\t<:upg:722549190097371237>2\n'
            + 'Health Regeneration Delay\t<:upg:722549190097371237>2\nSlap Back\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nQuickdraw\t<:upg:722549190097371237>3\nFallback\t<:upg:722549190097371237>3\nHardened\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nRewind\t<:upg:722549190097371237>3\nParty Supplies\t<:upg:722549190097371237>3\n'
            + 'Nutty Feedback\t<:upg:722549190097371237>4\nAdrenaline Rush\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Sunflower' || args[0] === 'sunflower')
        {
            UpgradesEmbed.setColor('#faa74a');
            UpgradesEmbed.setTitle('Sunflower Upgrades');
            UpgradesEmbed.setDescription('Super Savior\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nStuffy Sundrop\t<:upg:722549190097371237>2\nRevive Reward\t<:upg:722549190097371237>2\nVampire Flower\t<:upg:722549190097371237>2\nQuick Egress\t<:upg:722549190097371237>2\nShove\t<:upg:722549190097371237>2\nRollout\t<:upg:722549190097371237>2\n'
            + 'Leveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nBlossom\t<:upg:722549190097371237>5\nFull Bloom\t<:upg:722549190097371237>3\nCocoon\t<:upg:722549190097371237>3\nPocket Protection\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nHard Target\t<:upg:722549190097371237>3\nRecharge\t<:upg:722549190097371237>4\nSunslinger\t<:upg:722549190097371237>4\nCombat Aura\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Rose' || args[0] === 'rose')
        {
            UpgradesEmbed.setColor('#be2c1f');
            UpgradesEmbed.setTitle('Rose Upgrades');
            UpgradesEmbed.setDescription('Super Savior\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nS-Cape\t<:upg:722549190097371237>2\nRevive Reward\t<:upg:722549190097371237>2\nCarpool\t<:upg:722549190097371237>2\nThistle Missile\t<:upg:722549190097371237>2\nRollout\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nLocked and Loaded\t<:upg:722549190097371237>3\n'
            + 'Leveling Up\t<:upg:722549190097371237>2\nSpeedy\t<:upg:722549190097371237>3\nPollination\t<:upg:722549190097371237>3\nHard Target\t<:upg:722549190097371237>3\nGoatality\t<:upg:722549190097371237>3\nTime Snare\t<:upg:722549190097371237>4\nPsychedelic Goatift\t<:upg:722549190097371237>4\nCombat Aura\t<:upg:722549190097371237>4\nEpiphany\t<:upg:722549190097371237>4\nPhotosynthesis\t<:upg:722549190097371237>4\n<:legendary_upg:722632525796737055>Thorn Apart\t<:upg:722549190097371237>5');
            message.channel.send(UpgradesEmbed);
        }
        else if ((args[0] === 'Foot' && args[1] === 'Soldier') || (args[0] === 'foot' && args[1] === 'soldier'))
        {
            UpgradesEmbed.setColor('#ad9940');
            UpgradesEmbed.setTitle('Foot Soldier Upgrades');
            UpgradesEmbed.setDescription('Combo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\nAmmo Thing-A-Ma-Bob\t<:upg:722549190097371237>2\nSmelling Salts\t<:upg:722549190097371237>2\nRanger\t<:upg:722549190097371237>2\nShockwave\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\n'
            + 'Rapid Fire\t<:upg:722549190097371237>3\nRocket Leap\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nSticky!\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nPropellant\t<:upg:722549190097371237>3\nBottomless\t<:upg:722549190097371237>3\nLiftoff\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Imp' || args[0] === 'imp')
        {
            UpgradesEmbed.setColor('#e9683b');
            UpgradesEmbed.setTitle('Imp Upgrades');
            UpgradesEmbed.setDescription('Combo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\nButt Booster Booster\t<:upg:722549190097371237>1\nAftershock\t<:upg:722549190097371237>2\nMultiplying Madness\t<:upg:722549190097371237>2\nPod Powered\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\nRipcord\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\n'
            + 'Critical Blow\t<:upg:722549190097371237>3\nArm Day\t<:upg:722549190097371237>3\nSupermassive\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nEnergize\t<:upg:722549190097371237>3\nMech Hunter\t<:upg:722549190097371237>4\nCentripital Force\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if ((args[0] === 'Super' && args[1] === 'Brainz') || (args[0] === 'super' && args[1] === 'brainz'))
        {
            UpgradesEmbed.setColor('#70328c');
            UpgradesEmbed.setTitle('Super Brainz Upgrades');
            UpgradesEmbed.setDescription('Combo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\nTyphoon\t<:upg:722549190097371237>2\nStick and Move\t<:upg:722549190097371237>2\nFallback Plan\t<:upg:722549190097371237>2\nReach\t<:upg:722549190097371237>2\nSpeedbag\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\n'
            + 'Critical Blow\t<:upg:722549190097371237>3\nRecuperate\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nScorched\t<:upg:722549190097371237>3\nUltra Combo\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nExtra Special\t<:upg:722549190097371237>3\nHero\'s Moment\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if ((args[0] === '80s' && args[1] === 'Action' && args[2] === 'Hero') || (args[0] === '80s' && args[1] === 'action' && args[2] === 'hero'))
        {
            UpgradesEmbed.setColor('#172b4e');
            UpgradesEmbed.setTitle('80s Action Hero Upgrades');
            UpgradesEmbed.setDescription('Improved Tracking\t<:upg:722549190097371237>1\nCombo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLeg Day\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\nTrack Star\t<:upg:722549190097371237>2\nTargeting Arrows\t<:upg:722549190097371237>2\nFree Ride\t<:upg:722549190097371237>2\nBow Master\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\n'
            + 'Leveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nCritical Tag\t<:upg:722549190097371237>3\nRemarkable Rockets\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nSuper Payload\t<:upg:722549190097371237>4\nThe Huntsman\t<:upg:722549190097371237>5');
            message.channel.send(UpgradesEmbed);
        }
        else if ((args[0] === 'Electric' && args[1] === 'Slide') || (args[0] === 'electric' && args[1] === 'slide'))
        {
            UpgradesEmbed.setColor('#dc3b82');
            UpgradesEmbed.setTitle('Electric Slide Upgrades');
            UpgradesEmbed.setDescription('Combo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\nJumper Cabes\t<:upg:722549190097371237>2\nMalfunction\t<:upg:722549190097371237>2\nTurbulence\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nMaelstrom\t<:upg:722549190097371237>3\n'
            + 'Chain Lightning\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nAmplification\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nCooling Sparks\t<:upg:722549190097371237>4\nConduction\t<:upg:722549190097371237>4\nJazz Hands\t<:upg:722549190097371237>4\nDefibrillated\t<:upg:722549190097371237>5');
            message.channel.send(UpgradesEmbed);
        }
        else if ((args[0] === 'Captain' && args[1] === 'Deadbeard') || (args[0] === 'captain' && args[1] === 'deadbeard'))
        {
            UpgradesEmbed.setColor('#4e566a');
            UpgradesEmbed.setTitle('Captain Deadbeard Upgrades');
            UpgradesEmbed.setDescription('Refreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nPowder Keg\t<:upg:722549190097371237>1\nBest Defence\t<:upg:722549190097371237>2\nHealth Regeneration\t<:upg:722549190097371237>2\nHealth Regeneration Delay\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nIncoming Keg\t<:upg:722549190097371237>3\nWind Chilled\t<:upg:722549190097371237>3\n'
            + 'Scuttle Shot\t<:upg:722549190097371237>3\nFallback\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nAye Spy\t<:upg:722549190097371237>3\nPlunder\t<:upg:722549190097371237>3\nLong Barrel\t<:upg:722549190097371237>3\nFreebie\t<:upg:722549190097371237>3\nHeavy Metal\t<:upg:722549190097371237>4\nShore Leave\t<:upg:722549190097371237>4\nAdrenaline Rush\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'All-Star' || args[0] === 'all-star' || (args[0] === 'All' && args[1] === 'Star') || (args[0] === 'all' && args[1] === 'star'))
        {
            UpgradesEmbed.setColor('#d03123');
            UpgradesEmbed.setTitle('All-Star Upgrades');
            UpgradesEmbed.setDescription('Refreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nSpin Class\t<:upg:722549190097371237>2\nBest Defence\t<:upg:722549190097371237>2\nLong Bomb\t<:upg:722549190097371237>2\nFollow Through\t<:upg:722549190097371237>2\nShoot the Gap\t<:upg:722549190097371237>2\nHealth Regeneration\t<:upg:722549190097371237>2\nHealth Regeneration Delay\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\n'
            + 'Critical Blow\t<:upg:722549190097371237>3\nTennis Skills\t<:upg:722549190097371237>3\nStar Struck\t<:upg:722549190097371237>3\nFallback\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nSupercharged Football Coolant\t<:upg:722549190097371237>3\nApplying Pressure\t<:upg:722549190097371237>3\nInjury Time\t<:upg:722549190097371237>4\nHuge Fuse\t<:upg:722549190097371237>4\nAdrenaline Rush\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if ((args[0] === 'Space' && args[1] === 'Cadet') || (args[0] === 'space' && args[1] === 'cadet'))
        {
            UpgradesEmbed.setColor('#a3867c');
            UpgradesEmbed.setTitle('Space Cadet Upgrades');
            UpgradesEmbed.setDescription('Refreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nBullseye\t<:upg:722549190097371237>1\nRocket Fueled\t<:upg:722549190097371237>1\nTitanium Plating\t<:upg:722549190097371237>2\nBest Defence\t<:upg:722549190097371237>2\nHealth Regeneration\t<:upg:722549190097371237>2\nHealth Regeneration Delay\t<:upg:722549190097371237>2\nFeedback Loop\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\n'
            + 'Longshot\t<:upg:722549190097371237>3\nCritical Blow\t<:upg:722549190097371237>3\nAmmo Eater\t<:upg:722549190097371237>3\nEfficiency\t<:upg:722549190097371237>3\nAssimilation\t<:upg:722549190097371237>3\nFallback\t<:upg:722549190097371237>3\nAfterburners\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nTarget Acquired\t<:upg:722549190097371237>3\nAdrenaline Rush\t<:upg:722549190097371237>4');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Scientist' || args[0] === 'scientist')
        {
            UpgradesEmbed.setColor('#9e1abf');
            UpgradesEmbed.setTitle('Scientist Upgrades');
            UpgradesEmbed.setDescription('Super Savior\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nRevive Reward\t<:upg:722549190097371237>2\nEvolution\t<:upg:722549190097371237>2\nReanimate\t<:upg:722549190097371237>2\nRollout\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nWormhole\t<:upg:722549190097371237>3\nDiffusion\t<:upg:722549190097371237>3\n'
            + 'Speedy\t<:upg:722549190097371237>3\nCPR\t<:upg:722549190097371237>3\nHard Target\t<:upg:722549190097371237>3\nPower Wash\t<:upg:722549190097371237>3\nReflexive\t<:upg:722549190097371237>3\nDolphin Blasting\t<:upg:722549190097371237>4\nPrecision\t<:upg:722549190097371237>4\nMaterialize\t<:upg:722549190097371237>4\nCombat Aura\t<:upg:722549190097371237>4\nSteam Blaster\t<:upg:722549190097371237>5');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Engineer' || args[0] === 'engineer')
        {
            UpgradesEmbed.setColor('#fdaa4a');
            UpgradesEmbed.setTitle('Engineer Upgrades');
            UpgradesEmbed.setDescription('Super Savior\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nSeismic\t<:upg:722549190097371237>2\nReinforced\t<:upg:722549190097371237>2\nRevive Reward\t<:upg:722549190097371237>2\nRubber\t<:upg:722549190097371237>2\nTurbo Charge\t<:upg:722549190097371237>2\nRollout\t<:upg:722549190097371237>2\nBreakthrough\t<:upg:722549190097371237>2\nHydraulics\t<:upg:722549190097371237>2\n'
            + 'Leveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nProgress Report\t<:upg:722549190097371237>3\nDispersion\t<:upg:722549190097371237>3\nSignal Amp\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nHard Target\t<:upg:722549190097371237>3\nRally the Troops\t<:upg:722549190097371237>3\nCombat Aura\t<:upg:722549190097371237>4\n');
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Wizard' || args[0] === 'wizard')
        {
            UpgradesEmbed.setColor('#3160b2');
            UpgradesEmbed.setTitle('Wizard Upgrades');
            UpgradesEmbed.setDescription('Super Savior\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nRevive Reward\t<:upg:722549190097371237>2\nRollout\t<:upg:722549190097371237>2\nvE-O-sa\t<:upg:722549190097371237>2\nWand Wammo\t<:upg:722549190097371237>2\nWizard Needs Help\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nHard Target\t<:upg:722549190097371237>3\n'
            + 'Slow Your Roll\t<:upg:722549190097371237>3\nTwo-Headed Dragon\t<:upg:722549190097371237>3\nElder Alchemist\t<:upg:722549190097371237>3\nBottle Bouncer\t<:upg:722549190097371237>3\nBlinders Off\t<:upg:722549190097371237>3\nDrive-By Head Rub\t<:upg:722549190097371237>4\nDust and Echoes\t<:upg:722549190097371237>4\n');
            message.channel.send(UpgradesEmbed);
        }

        else if (args[0] === 'Combo')
        {
            UpgradesEmbed.setColor('#e01d82');
            UpgradesEmbed.setTitle('Combo');
            UpgradesEmbed.setDescription('Faster refresh time for all abilities by earning multiple vanquishes rapidly.\n\n' + `Cost ${upgpt}1\nCharacters: All Attack`);
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Refreshing' && args[1] === 'Revive')
        {
            UpgradesEmbed.setColor('#e01d82');
            UpgradesEmbed.setTitle('Refreshing Revive');
            UpgradesEmbed.setDescription('Faster refresh time for all abilities by reviving an ally.\n\n' + `Cost ${upgpt}1\nCharacters: All`);
            message.channel.send(UpgradesEmbed);
        }
        else if (args[0] === 'Rough' && args[1] === 'Patch')
            getupg('Rough Patch', 'Spawn with more health after suffering multiple vanquishes in a row.', 1, 'All');
        else if (args[0] === 'Low' && args[1] === 'Life')
            getupg('Low Life', 'Gain health by earning a vanquish when at low health.', 1, 'All Attack');
        else if (args[0] === 'Pro' && args[1] === 'Spitter')
            getupg('Pro Spitter', 'Chili Bean Bomb travels further.', 1, 'Peashooter');
        else if (args[0] === 'Reload' && args[1] === 'Gatling')
            getupg('Reload Gatling', 'Gain ammo when dealing critical damage with Pea Gatling.', 2, 'Peashooter');
        else if (args[0] === 'Last' && args[1] === 'Ditch')
            getupg('Last Ditch', 'Deal additional damage with last pea in Pea Cannon.', 2, 'Peashooter');
        else if (args[0] === 'Leveling' && args[1] === 'Up')
            getupg('Leveling Up', 'Earn XP faster.', 2, 'All');
        else if (args[0] === 'Fearless')
            getupg('Fearless', 'Regenerate health when near multiple enemies', 2, 'All Attack');
        else if (args[0] === 'Critical' && args[1] === 'Blow')
            getupg('Critical Blow', 'Faster refresh time for all abilities by earning a critical vanquish.', 3, 'All');
        else if (args[0] === 'Combat' && args[1] === 'Adrenaline')
            getupg('Combat Adrenaline', 'Pea Suped duration is extended by earning a vanquish while Pea Suped is active.', 3, 'Peashooter');
        else if (args[0] === 'Explosive' && args[1] === 'Gatling')
            getupg('Explosive Gatling', 'Enemies explode when vanquished by Pea Gatling.', 3, 'Peashooter');
        else if (args[0] === 'Homing' && args[1] === 'Pea')
            getupg('Homing Pea', 'Pea Cannon peas home towards targeted enemy.', 3, 'Peashooter');
        else if (args[0] === 'Bean' && args[1] === 'Party')
            getupg('Bean Party', 'Faster refresh time on Chili Bean Bomb when earning a vanquish with it.', 3, 'Peashooter');
        else if (args[0] === 'Speedy')
            getupg('Speedy', 'Move faster, except when sprinting.', 3, 'All');
        else if (args[0] === 'Vampiric')
            getupg('Vampiric', 'Gain health by earning a vanquish', 3, 'All Attack');
        else if (args[0] === 'Ready' && args[1] === 'Up')
            getupg('Ready Up', 'Use weapons and abilities faster just after sprinting.', 3, 'All Attack');
        else if (args[0] === 'Escape' && args[1] === 'Roots')
            getupg('Escape Roots', 'Move faster for a short time after vanquishing an enemy Hero.', 3, 'Peashooter');
        else if (args[0] === 'Feed' && args[1] === 'the' && args[2] === 'Beast')
            getupg('Feed the Beast', 'Faster refresh time for all abilities when dealing damage while Pea Suped is active.', 4, 'Peashooter');
        else if (args[0] === 'Party' && args[1] === 'Time')
            getupg('Party Time', 'Move faster and deal additional damage for a short time after earning a vanquish streak.', 5, 'Peashooter');
        else if (args[0] === 'Face' && args[1] === 'Bite')
            getupg('Face Bite', 'Chomp can do critical damage.', 1, 'Chomper');
        else if (args[0] === 'Upset' && args[1] === 'Stomach')
            getupg('Upset Stomach', 'Longer duration of Grody Goop', 2, 'Chomper');
        else if (args[0] === 'Vampire' && args[1] === 'Spikeweed')
            getupg('Vampire Spikeweed', 'Gain health by dealing damage with a Spikeweed.', 2, 'Chomper');
        else if (args[0] === 'Well' && args[1] === 'Fed')
            getupg('Well Fed', 'When using Burrow reduces Dig Power consumption when moving slow.', 3, 'Chomper');
        else if (args[0] === 'Halitosis')
            getupg('Halitosis', 'Deal additional splash damage at location that Slobber Shot hits.', 3, 'Chomper');
        else if (args[0] === 'Symbiosis')
            getupg('Symbiosis', 'Create a Spikeweed at Chomper\'s location by earing a vanquish with Burrow.', 3, 'Chomper');
        else if (args[0] === 'Chomp' && args[1] === 'Thing')
            getupg('Chomp Thing', 'Reduced time between taking damage and when health regeneration activates.', 3, 'Chomper');
        else if (args[0] === 'Hotrod')
            getupg('Hotrod', 'Move faster for a short time by earning a vanquish with Burrow.', 3, 'Chomper');
        else if (args[0] === 'Dirt' && args[1] === 'Bath')
            getupg('Dirt Bath', 'Faster movement speed and faster Chomp speed when in Grody Goop.', 4, 'Chomper');
        else if (args[0] === 'Mastication')
            getupg('Mastication', 'Gain faster digestion speed after vanquishing with Burrow.', 4, 'Chomper');
        else if (args[0] === '20/10')
            getupg('20/10', 'Larger area highlighted by Butter Beacon.', 2, 'Kernel Corn');
        else if (args[0] === 'Happy' && args[1] === 'Feet')
            getupg('Happy Feet', 'Move fasgter during Shuck Shot.', 2, 'Kernel Corn');
        else if (args[0] === 'Rapid' && args[1] === 'Recob')
            getupg('Rapid Recob', 'Cob Busters gain faster reload', 2, 'Kernel Corn');
        else if (args[0] === 'Buttered' && args[1] === 'Branches')
            getupg('Buttered Branches', 'Move faster when aiming.', 3, 'Kernel Corn');
        else if (args[0] === 'Hopscotch')
            getupg('Hopscotch', 'Deal additional damage by hitting enemy directly with Husk Hop corn kernels.', 3, 'Kernel Corn');
        else if (args[0] === 'Re-Corn-naissance')
            getupg('Re-Corn-naissance', 'Faster refresh time of Butter Beacon by a vanquish on highlighted enemy.', 3, 'Kernel Corn');
        else if (args[0] === 'Super' && args[1] === 'Spin')
            getup('Super Spin', 'Increased rate of fire for a short time by earning a vanquish. Upgrade can be stack up to three times.', 3, 'Kernel Corn');
        else if (args[0] === 'Mob' && args[1] === 'Cobs')
            getupg('Mob Cobs', 'Cob Busters pierce through enemies.', 3, 'Kernel Corn');
        else if (args[0] === 'Reaping' && args[1] === 'Leap')
            getupg('Reaping Leap', 'Larger damage area of Husk Hop.', 3, 'Kernel Corn');
        else if (args[0] === 'Cornucopia')
            getupg('Cornucopia', 'Faster refresh time of Shuck Shot by earning a multi-vanquish with Shuck Shot.', 3, 'Kernel Corn');
        else if (args[0] === 'Shogun-Guard')
            getupg(`Shogun-Guard ${legupg}`, 'Swap primary weapon to alternating dual fire assault cobs with personal shield attachment. Activate shield by aiming.', 5, 'Kernel Corn');
        else if (args[0] === 'Incubate')
            getupg('Incubate', 'Allies revive faster while within Casting Shadows', 2, 'Night Cap');
        else if (args[0] === 'Shadow' && args[1] === 'Sling')
            getupg('Shadow Sling', 'Move faster for a short time after exiting Shadow Sneak.', 2, 'Night Cap');
        else if (args[0] === 'Piercing' && args[1] === 'Power')
            getupg('Piercing Power', 'Gain Spore Strike ammo by dealing damage to multiple enemies with a single attack.', 2, 'Night Cap');
        else if (args[0] === 'Parkour')
            getupg('Parkour', 'Faster movement speed during second air jump.', 3, 'Night Cap');
        else if (args[0] === 'Shadow' && args[1] === 'Tribute')
            getupg('Shadow Tribute', 'Longer Shadow Sneak duration for a short time by earning a vanquish.', 3, 'Night Cap');
        else if (args[0] === 'Fleet' && args[1] === 'Footed')
            getupg('Fleet Footed', 'Move faster and gain ability to jump wihle Fung Fu is active.', 3, 'Night Cap');
        else if (args[0] === 'Spore-ratic')
            getupg('Spore-ratic', 'Spore Strikes move faster', 3, 'Night Cap');
        else if (args[0] === 'Clear' && args[1] === 'Coating')
            getupg('Clearn Coating', 'Takes reduced damage when invisible.', 3, 'Night Cap');
        else if (args[0] === 'Corrode')
            getupg('Corrode', 'Drain ammo, increase weapon heat, and slow ability refresh time of enemy hit by Casting Shadows.', 4, 'Night Cap');
        else if (args[0] === 'Uppercut')
            getupg('Uppercut', 'Enemies get knocked up into the air during Fung Fu.', 5, 'Night Cap');
        else if (args[0] === 'Heat' && args[1] === 'Seeking')
            getupg('Heat Seeking', 'Increases homing radius when the Blue Blazes is launches.', 2, 'Snapdragon');
        else if (args[0] === 'Excellent' && args[1] === 'Accelerant')
            getupg('Excellent Accelerant', 'Enemies remain on fire for longer.', 2, 'Snapdragon');
        else if (args[0] === 'Engulf')
            getupg('Engulf', 'Enemies remain on fire for longer', 2, 'Snapdragon');
        else if (args[0] === 'Coolant')
            getupg('Coolant', 'Reduced overheat of Flame Blower and Flare Ball by igniting an enemy.', 2, 'Snapdragon');
        else if (args[0] === 'Quake')
            getupg('Quake','Enemies get knocked up into the air using Swoop Slam.', 2, 'Snapdragon');
        else if (args[0] === 'Radiate')
            getupg('Radiate', 'Larger explosion of Flare Ball attack.', 2, 'Snapdragon');
        else if (args[0] === 'Ventilation')
            getupg('Ventilation', 'Reduced overheat of Flame Blower and Flare Ball when Blue Blazes is launched.', 3, 'Snapdragon');
        else if (args[0] === 'Campire')
            getupg('Campire', 'Create a column of fire at enemy\'s location on every 3rd vanquish.', 3, 'Snapdragon');
        else if (args[0] === 'Incendiary')
            getupg('Incendiary', 'Swoop Slam ignutes nearby enemies near impact.', 4, 'Snapdragon');
        else if (args[0] === 'Backdraft')
            getupg('Backdraft', 'Faster travel speed of Blazing Trail.', 4, 'Snapdragon');
        else if (args[0] === 'Spud' && args[1] === 'Spotting')
            getupg('Spud Spotting', 'Potato Mine displays health bar of nearby enemies to all allies.', 2, 'Cactus');
        else if (args[0] === 'Best' && args[1] === 'Defense')
            getupg('Best Defense', 'Briefly reduce incoming damage by earning a critical vanquish. Can stack 3 times.', 2, 'All Defense');
        else if (args[0] === 'Spotlight')
            getupg('Spotlight', 'Display health bar of enemy to team by dealing damage with Needle Shot.', 2, 'Cactus');
        else if (args[0] === 'Health' && args[1] === 'Regeneration')
            getupg('Health Regeneration', 'Faster health regeneration', 2, 'All Defense');
        else if (args[0] === 'Health' && args[1] === 'Regeneration' && args[2] === 'Delay')
            getupg('Health Regeneration Delay', 'Reduced time between taking damage and when health regeneration activates.', 2, 'All Defense');
        else if (args[0] === 'Alacrity')
            getupg('Alacrity', 'Gain instant max charge for Spike Shot shortly after landing from Petal Propeller.', 2, 'Cactus');
        else if (args[0] === 'Pressure' && args[1] === 'Point')
            getupg('Pressure Point', 'Enemies randomly explode when earning a critical vanquish.', 2, 'Cactus');
        else if (args[0] === 'Mirage')
            getupg('Mirage', 'Improved view on Spike Shot lens when zoomed.', 3, 'Cactus');
        else if (args[0] === 'Fallback')
            getupg('Fallback', 'Move faster when at low health.', 3, 'All Defense');
        else if (args[0] === 'Bon' && args[1] === 'Voyage')
            getupg('Bon Voyage', 'Create additional Potato Mine at Petal Propeller takeoff location.', 3, 'Cactus');
        else if (args[0] === 'Looting')
            getupg('Looting', 'Gain ammo by dealing critical damage several times in a row.', 3, 'Cactus');
        else if (args[0] === 'Calibrated')
            getupg('Calibrated', 'Faster zoom damage charge by dealing damage with Spike Shot.', 4, 'Cactus');
        else if (args[0] === 'Popcorn')
            getupg('Popcorn', 'Randomly creates a Potato Mine near enemy if vanquished by max charge Spike Shot.', 4, 'Cactus');
        else if (args[0] === 'Adrenaline' && args[1] === 'Rush')
            getupg('Adrenaline Rush', 'Move faster for a short time by earning a vanquish.', 4, 'All Defense');
        else if (args[0] === 'Sustenance')
            getupg('Sustenance', 'Gain flight fuel by earning a vanquish with Garlic Drone.', 4, 'Cacuts');
        else if (args[0] === 'Emergency' && args[1] === 'Exit')
            getupg('Emergency Exit', 'Move faster for a short time after exiting Spin Dash.', 1, 'Citron');
        else if (args[0] === 'Quenching' && args[1] === 'Cover')
            getupg('Quenching Cover', 'Gain ammo for Juice Cannon when blocking damage with Peel Shield.', 2, 'Citron');
        else if (args[0] === 'Freshly' && args[1] === 'Squeezed')
            getupg('Freshly Squeezed', 'Momentarily increase sprint speed after vanquishing an enemy.', 2, 'Citron');
        else if (args[0] === 'Kinetic' && args[1] === 'Energy')
            getupg('Kinetic Energy','Gain Peel Shield health by dealing damage.', 3, 'Citron');
        else if (args[0] === 'Peel' && args[1] === 'Out')
            getupg('Peel Out', 'Move faster when Peel Shield is deployed.', 3, 'Citron');
        else if (args[0] === 'Peached')
            getupg('Peached', 'Longer Stun duration by hitting enemy directly with E.M.Peach.', 3, 'Citron');
        else if (args[0] === 'Juiced')
            getupg('Juiced', 'Navel Laser has larger width and always deals critical damage.', 3, 'Citron');
        else if (args[0] === 'Bowling')
            getupg('Bowling', 'Knock enemies farther away with Spin Dash.', 4, 'Citron');
        else if (args[0] === 'Pulp' && args[1] === 'Powered')
            getupg('Pulp Powered', 'Extended Navel Laser duration by earning a Vanquish with Navel Laser.', 4, 'Citron');
        else if (args[0] === 'Peachy')
            getupg('Peachy', 'Gain Peel Shield health by stunning enemies with E.M.Peach.', 4, 'Citron');
        else if (args[0] === 'Log' && args[1] === 'Jam')
            getupg('Log Jam', 'Cover larger area with Roll for Damage', 1, 'Acorn');
        else if (args[0] === 'Molasses')
            getupg('Molasses', 'Slow enemies who are near Super Sap Trap', 2, 'Acorn');
        else if (args[0] === 'Natural' && args[1] === '20')
            getupg('Natural 20', 'Knock enemy away when hit by Roll for Damage ability.', 2, 'Acorn');
        else if (args[0] === 'Little' && args[1] === 'Friend')
            getupg('Little Friend', 'Hold more Shell Shot and Wood Grief ammo. Treetop Turret overheats more slowly.', 2, 'Acorn');
        else if (args[0] === 'Slap' && args[1] === 'Back')
            getupg('Slap Back', 'Knock enemies farther away with Acorn\'s Sap Trap', 2, 'Acorn');
        else if (args[0] === 'Quickdraw')
            getupg('Quickdraw', 'Gain ammo for Shell Shot weapon by using Acorn Dash ability.', 3, 'Acorn');
        else if (args[0] === 'Hardened')
            getupg('Hardened', 'Increased max health.', 3, 'Acorn');
        else if (args[0] === 'Rewind')
            getupg('Rewind', 'Sap Trap refreshes faster if it doesn\'t deal any damage.', 3, 'Acorn');
        else if (args[0] === 'Party' && args[1] === 'Supplies')
            getupg('Party Supplies', 'Heal yourself and the Oak at faster rate with Lumber Support', 3, 'Acorn');
        else if (args[0] === 'Nutty' && args[1] === 'Feedback')
            getupg('Nutty Feedback', 'Gain ammo for Shell Shot by dealing damage.', 4, 'Acorn');
        else if (args[0] === 'Super' && args[1] === 'Savior')
            getupg('Super Savior', 'Use jump and abilities while reviving.', 1, 'All Support');
        else if (args[0] === 'Stuffy' && args[1] === 'Sundrop')
            getupg('Stuffy Sundrop', 'Create Sundrops at enemy\'s location by vanquishing them with Sunbeam.', 2, 'Sunflower');
        else if (args[0] === 'Revive' && args[1] === 'Reward')
            getupg('Revive Reward', 'Gain health by reviving an ally.', 2, 'All Support');
        else if (args[0] === 'Vampire' && args[1] === 'Flower')
            getupg('Vampire Flower', 'Gain health when dealing damage', 2, 'Sunflower');
        else if (args[0] === 'Quick' && args[1] === 'Egress')
            getupg('Quick Egress', 'Move faster during Sunny Side Up.', 2, 'Sunflower');
        else if (args[0] === 'Shove')
            getupg('Shove', 'Knock enemies away by activating Sunny Side Up.', 2, 'Sunflower');
        else if (args[0] === 'Rollout')
            getupg('Rollout', 'Move faster after spawning or being revived.', 2, 'All Support');
        else if (args[0] === 'Full' && args[1] === 'Bloom')
            getupg('Full Bloom', 'Extends range of Heal Beam', 3, 'Sunflower');
        else if (args[0] === 'Sunslinger')
            getupg('Sunslinger', 'Increased healing rate when target is at low health.', 3, 'Sunflower');
        else if (args[0] === 'Pocket' && args[1] === 'Protection')
            getupg('Pocket Protection', 'Gain health by healing allies.', 3, 'Sunflower');
        else if (args[0] === 'Hard' && args[1] === 'Target')
            getupg('Hard Target', 'Move faster for a short time after receiving damage.', 3, 'Sunflower');
        else if (args[0] === 'Recharge')
            getupg('Recharge', 'Deal damage with Sunbeam to extend its duration.', 4, 'Sunflower');
        else if (args[0] === 'Cocoon')
            getupg('Cocoon', 'Increased amount of overhealth Heal Beam can provide.', 4, 'Sunflower');
        else if (args[0] === 'Combat' && args[1] === 'Aura')
            getupg('Combat Aura', 'Gain increased damage aura for a short time after a vanquish streak of three.', 4, 'All Support');
        else if (args[0] === 'Blossom')
            getupg('Blossom', 'Heal Beam can branch out and heal additional adjacent ally.', 5, 'Sunflower');
        else if (args[0] === 'S-Cape')
            getupg('S-Cape', 'Move faster in air.', 2, 'Rose');
        else if (args[0] === 'Carpool')
            getupg('Carpool', 'Longer duration of Arcane Enigma when more allies are sped up.', 2, 'Rose');
        else if (args[0] === 'Thistle' && args[1] === 'Missile')
            getupg('Thistle Missile', 'Magic Thistles move faster.', 2, 'Rose');
        else if (args[0] === 'Locked' && args[1] === 'and' && args[2] === 'Loaded')
            getupg('Locked and Loaded', 'Increased homing range of Magic Thistles when aiming.', 3, 'Rose');
        else if (args[0] === 'Pollination')
            getupg('Pollination', 'Cast Jinx at enemies location if you or your allies critically vanquish a Jinxed enemy.', 3, 'Rose');
        else if (args[0] === 'Goatality')
            getupg('Goatality', 'Longer Goat form for enemies affected by Goatify.', 3, 'Rose');
        else if (args[0] === 'Time' && args[1] === 'Snare')
            getupg('Time Snare', 'Enemies are slowed down when rapidly damaged by Magic Thistle attacks.', 4, 'Rose');
        else if (args[0] === 'Psychedelic' && args[1] === 'Goatify')
            getupg('Psychedelic Goatify', 'Enemies have less control when hit by Goatify', 4, 'Rose');
        else if (args[0] === 'Epiphany')
            getupg('Epiphany', 'Starts regenerating health while in Arcane Enigma.', 4, 'Rose');
        else if (args[0] === 'Photosynthesis')
            getupg('Photosynthesis', 'Gain health when a Jinxed nemey gets vanquished.', 4, 'Rose');
        else if (args[0] === 'Thorn' && args[1] === 'Apart')
            getupg(`Thorn Apart ${legupg}`, 'Gain an attack that is charged with Jinx, Arcane Enigma, and Goatify.', 5, 'Rose');
        else if (args[0] === 'Ammo' && args[1] === 'Thing-A-Ma-Bob')
            getupg('Ammo Thing-A-Ma-Bob', 'Increased ammo capacity for Z-1 Assault Blaster.', 2, 'Foot Soldier');
        else if (args[0] === 'Smelling' && args[1] === 'Salts')
            getupg('Smelling Salts', 'Allies get revived faster when inside Super Stink Cloud.', 2, 'Foot Soldier');
        else if (args[0] === 'Rocket' && args[1] === 'Leap')
            getupg('Rocket Leap', 'Distance increased for Rocket Jump.', 2, 'Foot Soldier');
        else if (args[0] === 'Ranger')
            getupg('Ranger', 'Increased zoom when aiming.', 2, 'Foot Soldier');
        else if (args[0] === 'Shockwave')
            getup('Shockwave', 'ZPG explosion knocks enemies away.', 2, 'Foot Soldier');
        else if (args[0] === 'Rapid' && args[1] === 'Fire')
            getupg('Rapid Fire', 'Increased rate of fire while using the Z-1 Assault Blaster.', 3, 'Foot Soldier');
        else if (args[0] === 'Sticky!')
            getupg('Sticky!', 'Super Stink Cloud sticks to enemies and surfaces.', 3, 'Foot Soldier');
        else if (args[0] === 'Propellant')
            getupg('Propellant', 'Faster flight speed of ZPG.', 3, 'Foot Soldier');
        else if (args[0] === 'Bottomless')
            getupg('Bottomless', 'Z-1 Assualt Blaster gains ammo for every vanquish.', 3, 'Foot Soldier');
        else if (args[0] === 'Liftoff')
            getupg('Liftoff', 'Cause an explosion at launch when using Rocket Jump', 4, 'Foot Soldier');
        else if (args[0] === 'Butt' && args[1] === 'Booster' && args[2] === 'Booster')
            getupg('Butt Booster Booster', 'Second jump hovers longer.', 1, 'Imp');
        else if (args[0] === 'Aftershock')
            getupg('Aftershock', 'Enemies are knocked into the air by Bionic Bash.', 2, 'Imp');
        else if (args[0] === 'Multiplying' && args[1] === 'Madness')
            getupg('Multiplying Madness', 'Missile Madness duration extended by earning a vanquish.', 2, 'Imp');
        else if (args[0] === 'Pod' && args[1] === 'Powered')
            getupg('Pod Powered', 'Move faster for a short time after ejecting from Explosive Escape.', 2, 'Imp');
        else if (args[0] === 'Ripcord')
            getupg('Ripcord', 'Increased rate of fire while using Impkata.', 3, 'Imp');
        else if (args[0] === 'Arm' && args[1] === 'Day')
            getupg('Arm Day', 'Reduced recoil of Imp Blasters.', 3, 'Imp');
        else if (args[0] === 'Supermassive')
            getupg('Supermassive', 'Increased size of Gravity Grenade.', 3, 'Imp');
        else if (args[0] === 'Energize')
            getupg('Engergize', 'Gaim Mech fuel by damaging enemies with Bionic Bash.', 3, 'Imp');
        else if (args[0] === 'Mech' && args[1] === 'Hunter')
            getupg('Mech Hunter', 'Faster refresh time of Robo Call when dealing Damage.', 4, 'Imp');
        else if (args[0] === 'Centripetal' && args[1] === 'Force')
            getupg('Centripetal Force', 'Move faster when enemies are near while using Impkata.', 4, 'Imp');
        else if (args[0] === 'Typhoon')
            getupg('Typhoon', 'Knock enemies away with Turbo Twister', 2, 'Super Brainz');
        else if (args[0] === 'Stick' && args[1] === 'and' && args[2] === 'Move')
            getupg('Stick and Move', 'Move faster for a short time by landing a three hit combo with Heroic Fists.', 2, 'Super Brainz');
        else if (args[0] === 'Fallback' && args[1] === 'Plan')
            getupg('Fallback Plan', 'Hyper Jump Thump refreshes faster if it doesn\'t deal any damage after landing.', 2, 'Super Brainz');
        else if (args[0] === 'Reach')
            getupg('Reach', 'Faster charge rate of Ultra Fyling Fist for a short time by dealing damage with it.', 2, 'Super Brainz');
        else if (args[0] === 'Speed' && args[1] === 'Bag')
            getupg('Speed Bag', 'Heroic Fists punch faster by earning a vanquish. Upgrade can stack up to three times.', 2, 'Super Brainz');
        else if (args[0] === 'Recuperate')
            getupg('Recuperate', 'Gain health by dealing damage with Turbo Twister.', 3, 'Super Brainz');
        else if (args[0] === 'Scorched')
            getupg('Scorched', 'Deal additional damage for a short time in the area that Super Ultra Ball hits.', 3, 'Super Brainz');
        else if (args[0] === 'Ultra' && args[1] === 'Combo')
            getupg('Ultra Combo', 'Gain additional punch in Heroic Fists combo.', 3, 'Super Brainz');
        else if (args[0] === 'Extra' && args[1] === 'Special')
            getupg('Extra Special', 'Raise shield when firing Super Ultra Ball.', 3, 'Super Brainz');
        else if (args[0] === 'Hero\'s' && args[1] === 'Moment')
            getupg('Hero\'s Moment', 'Gain health for knocking an enemy into the air with Hyper Jump Thump.', 4, 'Super Brainz');
        else if (args[0] === 'Improved' && args[1] === 'Tracking')
            getupg('Improved Tracking', 'Earn a tag on an enemy by dealing damage with Can\'t-Miss-ile', 1, '80s Action Hero');
        else if (args[0] === 'Leg' && args[1] === 'Day')
            getupg('Leg Day', 'Action Hero Zombie jumps farther and higher when activating Dynamite Dodge.', 1, '80s Action Hero');
        else if (args[0] === 'Track' && args[1] === 'Star')
            getupg('Track Star', 'Earn a tag on an enemy when dealing damage with Dynamite Dodge.', 2, '80s Action Hero');
        else if (args[0] === 'Targeting' && args[1] === 'Arrows')
            getupg('Targeting Arrows', 'Tags on enemies remain after suffering a vanquish.', 2, '80s Action Hero');
        else if (args[0] === 'Free' && args[1] === 'Ride')
            getupg('Free Ride', 'Fire additional rockets by earning a vanquish with Rocket Ride.', 2, '80s Action Hero');
        else if (args[0] === 'Bow' && args[1] === 'Master')
            getupg('Bow Master', 'Charge Bow Blaster faster for a short time by earning a vanquish.', 2, '80s Action Hero');
        else if (args[0] === 'Critical' && args[1] === 'Tag')
            getupg('Critical Tag', 'Earn three tags on an enemy when dealing critical damage with Bow Blaster.', 3, '80s Action Hero');
        else if (args[0] === 'Remarkable' && args[1] === 'Rockets')
            getupg('Remarkable Rockets', 'Earn a tag on an enemy by dealing damage with Rocket Ride.', 3, '80s Action Hero');
        else if (args[0] === 'Super' && args[1] === 'Payload')
            getupg('Super Payload', 'Fire two additional missiles with Can\'t-Miss-ile.', 4, '80s Action Hero');
        else if (args[0] === 'The' && args[1] === 'Huntsman')
            getupg('The Huntsman', 'Earn three tags on an enemy when dealing damage with fully charged Bow Blaster shot.', 5, '80s Action Hero');
        else if (args[0] === 'Jumper' && args[1] === 'Cables')
            getupg('Jumper Cables', 'Extends range of arcing electricity from Boogie Bolt.', 2, 'Electric Slide');
        else if (args[0] === 'Malfunction')
            getupg('Malfunction', 'Randomly cause an electric explosion around Electric Slide when reloading Boogie Bolt.', 2, 'Electric Slide');
        else if (args[0] === 'Turbulence')
            getupg('Turbulence', 'Randomly stun enemies when dealing damage with Disco Tornado.', 2, 'Electric Slide');
        else if (args[0] === 'Maelstrom')
            getupg('Maelstrom', 'Deal additional damage while in Outta Fight! and inside Disco Tornado.', 3, 'Electric Slide');
        else if (args[0] === 'Chain' && args[1] === 'Lightning')
            getupg('Chain Lightning', 'Arcing electricity from Boogie Bolt jumps to an additional nearby target.', 3, 'Electric Slide');
        else if (args[0] === 'Amplification')
            getupg('Amplification', 'Capture enemies from farther distance with Funky Bouncer.', 3, 'Electric Slide');
        else if (args[0] === 'Cooling' && args[1] === 'Sparks')
            getupg('Cooling Sparks', 'Faster ability refresh of Disco Tornado by earning a vanquish with Disco Tornado.', 4, 'Electric Slide');
        else if (args[0] === 'Conduction')
            getupg('Conduction', 'Faster refresh time of Disco Tornado by capturing enemies with Funky Bouncer.', 4, 'Electric Slide');
        else if (args[0] === 'Jazz' && args[1] === 'Hands')
            getupg('Jazz Hands', 'Inflict electrical stun faster by dealing damage with Boogie Bolt.', 4, 'Electric Slide');
        else if (args[0] === 'Defibrillated')
            getupg('Defibrillated', 'Start reloading and regenerating health while in Outta Fight!', 5, 'Electric Slide');
        else if (args[0] === 'Powder' && args[1] === 'Keg')
            getupg('Powder Keg', 'Captain Deadbeard gets launched from Barrel Blast.', 1, 'Captain Deadbeard');
        else if (args[0] === 'Incoming' && args[1] === 'Keg')
            getupg('Incoming Keg', 'Move faster while in Barrel Blast.', 3, 'Captain Deadbeard');
        else if (args[0] === 'Wind' && args[1] === 'Chilled')
            getupg('Wind Chilled', 'Reduced overheat for Parrot Pulse weapon.', 3, 'Captain Deadbeard');
        else if (args[0] === 'Scuttle' && args[1] === 'Shot')
            getupg('Scuttle Shot', 'Scurvy Scattershot knocks enemies away when dealing damage.', 3, 'Captain Deadbeard');
        else if (args[0] === 'Aye' && args[1] === 'Spy')
            getupg('Aye Spy', 'Improved view on Spyglass Shot lens when zoomed.', 3, 'Captain Deadbeard');
        else if (args[0] === 'Plunder')
            getupg('Plunder', 'Faster refresh time of Eggsplosion by dealing critical damage with Parrot Pal.', 3, 'Captain Deadbeard');
        else if (args[0] === 'Long' && args[1] === 'Barrel')
            getupg('Long Barrel', 'Reduced spread of Scurvy Scattershot.', 3, 'Captain Deadbeard');
        else if (args[0] === 'Freebie')
            getupg('Freebie', 'Gain ammo for Spyglass Shot when vanquishing enemies at max charge.', 3, 'Captain Deadbeard');
        else if (args[0] === 'Heavy' && args[1] === 'Metal')
            getupg('Heavy Metal', 'Start with max zoom damage after activating Anchor\'s Away.', 4, 'Captain Deadbeard');
        else if (args[0] === 'Shore' && args[1] === 'Leave')
            getupg('Shore Leave', 'Move faster for a short time after landing from Anchor\'s Away.', 4, 'Captain Deadbeard');
        else if (args[0] === 'Spin' && args[1] === 'Class')
            getupg('Spin Class', 'Football Cannon spins up faster.', 2, 'All-Star');
        else if (args[0] === 'Long' && args[1] === 'Bomb')
            getupg('Long Bomb', 'Imp Punt flies farther.', 2, 'All-Star');
        else if (args[0] === 'Follow' && args[1] === 'Through')
            getupg('Follow Through', 'Enemies are knocked away farther when dealing damage with Sprint Tackle.', 2, 'All-Star');
        else if (args[0] === 'Shoot' && args[1] === 'The' && args[2] === 'Gap')
            getupg('Shoot The Gap', 'Travel further when using Sprint Tackle.', 2, 'All-Star');
        else if (args[0] === 'Tennis' && args[1] === 'Skills')
            getupg('Tennis Skills', 'Move faster when aiming or firing.', 3, 'All-Star');
        else if (args[0] === 'Star' && args[1] === 'Struck')
            getupg('Star Struck', 'Deploying Tackle Dummy knocks enemies away.', 3, 'All-Star');
        else if (args[0] === 'Supercharged' && args[1] === 'Football' && args[2] === 'Coolant')
            getup('Supercharged Football Cooland', 'Reduce overheat for Football Cannon by earning a vanquish.', 3, 'All-Star');
        else if (args[0] === 'Applying' && args[1] === 'Pressure')
            getupg('Applying Pressure', 'Near misses with Football Cannon reduce enemy vision.', 3, 'All-Star');
        else if (args[0] === 'Injury' && args[1] === 'Time')
            getupg('Injury Time', 'Allies get revived faster when inside Tackle Dummy shield.', 4, 'All-Star');
        else if (args[0] === 'Huge' && args[1] === 'Fuse')
            getupg('Huge Fuse', 'Deal additional damage when directly hitting an enemy with Imp Punt.', 4, 'All-Star');
        else if (args[0] === 'Bullseye')
            getupg('Bullseye', 'Deal damage with targeting part of Big Bang Beam', 1, 'Space Cadet')
        else if (args[0] === 'Rocket' && args[1] === 'Fueled')
            getupg('Rocket Fueled', 'Faster flight speed of Hands-On Torpedo.', 1, 'Space Cadet');
        else if (args[0] === 'Titanium' && args[1] === 'Plating')
            getupg('Titanium Plating', 'Increased health of Hands-On Torpedo.', 2, 'Space Cadet');
        else if (args[0] === 'Feedback' && args[1] === 'Loop')
            getupg('Feedback Loop', 'Increased rate of fire when dealing critical damage.', 2, 'Space Cadet');
        else if (args[0] === 'Longshot')
            getupg('Longshot', 'Increased homing range of Cosmo Shot when aiming.', 3, 'Space Cadet');
        else if (args[0] === 'Ammo' && args[1] === 'Eater')
            getupg('Ammo Eater', 'Connected Space Cadets gain ammo by blocking damage with Asteroid Shield.', 3, 'Space Cadet');
        else if (args[0] === 'Efficiency')
            getupg('Efficiency', 'Cosmo Shot gains faster reload by earning a vanquish. Can stack up to 3 times.', 3, 'Space Cadet');
        else if (args[0] === 'Assimilation')
            getupg('Assimilation', 'Vanquishes with Crater Maker increases it\'s duration.', 3, 'Space Cadet');
        else if (args[0] === 'Afterburners')
            getupg('Afterburners', 'Move faster while Crater Maker is active.', 3, 'Space Cadet');
        else if (args[0] === 'Target' && args[1] === 'Acquired')
            getupg('Target Acquired', 'Move faster while Gravity Smash is active.', 3, 'Space Cadet');
        else if (args[0] === 'Evolution')
            getupg('Evolution', 'Start with overhealth when spawning.', 2, 'Scientist');
        else if (args[0] === 'Reanimate')
            getupg('Reanimate', 'Allies get revived faster when in proximity to Sticky Healy Thingy', 2, 'Scientist');
        else if (args[0] === 'Wormhole')
            getupg('Wormhole', 'Travel further when using Warp.', 3, 'Scientist');
        else if (args[0] === 'Diffusion')
            getupg('Diffusion', 'Increased heal area when Sticky Healy Thingy is stuck to an ally or enemy.', 3, 'Scientist');
        else if (args[0] === 'CPR')
            getupg('CPR', 'Increased effect of Healing Hose if target ally is at low health.', 3, 'Scientist');
        else if (args[0] === 'Power' && args[1] === 'Wash')
            getupg('Power Wash', 'Improved range and healing when aiming Healing Hose.', 3, 'Scientist');
        else if (args[0] === 'Reflexive')
            getupg('Reflexive', 'Gain health from healing other zombies.', 3, 'Scientist');
        else if (args[0] === 'Dolphin' && args[1] === 'Blasting')
            getupg('Dolphin Blasting', 'Increased rate of fire for short time after earning a vanquish. Upgrade can stack up to three times.', 4, 'Scientist');
        else if (args[0] === 'Percision')
            getupg('Percision', 'Goo Blaster has less projective spread when aiming weapon.', 4, 'Scientist');
        else if (args[0] === 'Materialize')
            getupg('Materialize', 'Gain ammo for Goo Blaster by using Warp ability.', 4, 'Scientist');
        else if (args[0] === 'Steam' && args[1] === 'Blaster')
            getupg(`Steam Blaster ${legupg}`, 'Swap primary weapon for a short range, area controlling steam weapon.', 5, 'Scientist');
        else if (args[0] === 'Seismic')
            getupg('Seismic', 'While sprinting, knock enemies away with jackhammer.', 2, 'Engineer');
        else if (args[0] === 'Reinforced')
            getupg('Reinforced', 'Increased health of deployed Bullhorns.', 2, 'Engineer');
        else if (args[0] === 'Rubber')
            getupg('Rubber', 'Concrete Launcher\'s projectives bounce more before detonating.', 2, 'Engineer');
        else if (args[0] === 'Turbo' && args[1] === 'Charge')
            getupg('Turbo Charge', 'Longer duration of Double Time speed boost.', 2, 'Engineer');
        else if (args[0] === 'Breakthrough')
            getupg('Breakthrough', 'Increased range on Concrete Launcher.', 2, 'Engineer');
        else if (args[0] === 'Hydraulics')
            getupg('Hydraulics', 'Jump higher on jackhammer while sprinting.', 2, 'Engineer');
        else if (args[0] === 'Progress' && args[1] === 'Report')
            getupg('Progress Report', 'Damage by Heavy Helper reveals enemy health bar to Engineer.', 3, 'Engineer');
        else if (args[0] === 'Dispersion')
            getupg('Dispersion', 'Cover larger area with Bullhorn Swarm.', 3, 'Engineer');
        else if (args[0] === 'Signal' && args[1] === 'Amp')
            getupg('Signal Amp', 'Extends range of comabt buff from Heavy Helper.', 3, 'Engineer');
        else if (args[0] === 'Rally' && args[1] === 'the' && args[2] === 'Troops')
            getupg('Rally the Troops', 'Faster refresh time on all abilities when allies use Double Time.', 3, 'Engineer');
        else if (args[0] === 'vE-O-sa')
            getupg('vE-O-sa', 'Cause an explosion at your feet when using Spell Disaster', 2, 'Wizard');
        else if (args[0] === 'Wizard' && args[1] === 'Needs' && args[2] === 'Help')
            getupg('Wizard Needs Help', 'Grant armor to ally who is reviving you.', 2, 'Wizard');
        else if (args[0] === 'Wand' && args[1] === 'Wammo')
            getupg('Wand Wammo', 'Increased ammo capacity for Orbracadorbra and Shooting Star', 2, 'Wizard');
        else if (args[0] === 'Slow' && args[1] === 'Your' && args[2] === 'Roll')
            getupg('Slow Your Roll', 'Chargged up shot for Orbracadorbra slows down when dealing damage.', 3, 'Wizard');
        else if (args[0] === 'Elder' && args[1] === 'Alchemist')
            getupg('Elder Alchemist', 'Start ally health regen with Zee-lixir.', 3, 'Wizard');
        else if (args[0] === 'Blinders' && args[1] === 'Off')
            getupg('Blinders Off', 'Wider angle to achieve Starz Align when in Co-Star mode.', 3, 'Wizard');
        else if (args[0] === 'Bottle' && args[1] === 'Bouncer')
            getupg('Bottle Bouncer', 'Make Zee-lixir bounce before exploding. Triggers effect on bounce and explosion.', 3, 'Wizard');
        else if (args[0] === 'Drive-By' && args[1] === 'Head' && args[2] === 'Rub')
            getupg('Drive-By Head Rub', 'Ally retains armor and vision buff after Wizard leaves.', 4, 'Wizard');
        else if (args[0] === 'Dust' && args[1] === 'and' && args[2] === 'Echoes')
            getupg('Dust and Echoes', 'Enemies vanquished by Spell Disaster are unrevivable.', 4, 'Wizard');
        else if (args[0] === 'Two-Headed' && args[1] === 'Dragon')
            getupg('Two-Headed Dragon', 'Extend Co-Star duration when you or ally carrier earns a vanquish.', 3, 'Wizard');
        else{
            UpgradesEmbed.setColor('#ff0000');
            UpgradesEmbed.setTitle('Error');
            UpgradesEmbed.setDescription('Invalid character or upgrade name. To get upgrades, type in "pvz.bfnupgs [Character Name]".');
            message.channel.send(UpgradesEmbed);
        }

        function getupg(title, desc, cost, chars){
            UpgradesEmbed.setTitle(title);
            UpgradesEmbed.setDescription(`${desc}\n\n` + `Cost ${upgpt}${cost}\nCharacters: ${chars}`);
            switch (chars)
            {
                case 'Peashooter':
                    UpgradesEmbed.setColor('#4da43b');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673227762171955/Perk_RoleIcon_Hero_Peashooter.png');
                    break;
                case 'Chomper':
                    UpgradesEmbed.setColor('#5d3b76');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673182656888882/Perk_RoleIcon_Hero_Chomper.png');
                    break;
                case 'Kernel Corn':
                    UpgradesEmbed.setColor('#fdb559');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673179020427425/Perk_RoleIcon_Hero_AssaultCorn.png');
                    break;
                case 'Night Cap':
                    UpgradesEmbed.setColor('#c04359');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673224285225000/Perk_RoleIcon_Hero_Mushroom.png');
                    break;
                case 'Snapdragon':
                    UpgradesEmbed.setColor('#ee6f21');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673242396229672/Perk_RoleIcon_Hero_SnapDragon.png');
                    break;
                case 'Cactus':
                    UpgradesEmbed.setColor('#929d41');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673181511712878/Perk_RoleIcon_Hero_Cactus.png');
                    break;
                case 'Citron':
                    UpgradesEmbed.setColor('#ff9455');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673184061980712/Perk_RoleIcon_Hero_Citron.png');
                    break;
                case 'Acorn':
                    UpgradesEmbed.setColor('#5c351b');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673174394110052/Perk_RoleIcon_Hero_Acorn.png');
                    break;
                case 'Sunflower':
                    UpgradesEmbed.setColor('#faa74a');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673249845313636/Perk_RoleIcon_Hero_Sunflower.png');
                    break;
                case 'Rose':
                    UpgradesEmbed.setColor('#be2c1f');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673235416907836/Perk_RoleIcon_Hero_Rose.png');
                    break;
                case 'Foot Soldier':
                    UpgradesEmbed.setColor('#ad9940');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673246439669760/Perk_RoleIcon_Hero_Soldier.png');
                    break;
                case 'Imp':
                    UpgradesEmbed.setColor('#e9683b');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673285589172254/Perk_RoleIcon_Hero_Imp.png');
                    break;
                case 'Super Brainz':
                    UpgradesEmbed.setColor('#70328c');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673251909042196/Perk_RoleIcon_Hero_SuperBrainz.png');
                    break;
                case '80s Action Hero':
                    UpgradesEmbed.setColor('#172b4e');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673176126357585/Perk_RoleIcon_Hero_ActionHero.png');
                    break;
                case 'Electric Slide':
                    UpgradesEmbed.setColor('#dc3b82');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673185483849758/Perk_RoleIcon_Hero_Electric.png');
                    break;
                case 'Captain Deadbeard':
                    UpgradesEmbed.setColor('#4e566a');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673231499296968/Perk_RoleIcon_Hero_Pirate.png');
                    break;
                case 'All-Star':
                    UpgradesEmbed.setColor('#d03123');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673178021920858/Perk_RoleIcon_Hero_AllStar.png');
                    break;
                case 'Space Cadet':
                    UpgradesEmbed.setColor('#a3867c');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673180379381770/Perk_RoleIcon_Hero_Astronaut.png');
                    break;
                case 'Scientist':
                    UpgradesEmbed.setColor('#9e1abf');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673239149969478/Perk_RoleIcon_Hero_Scientist.png');
                    break;
                case 'Engineer':
                    UpgradesEmbed.setColor('#fdaa4a');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673186637152346/Perk_RoleIcon_Hero_Engineer.png');
                    break;
                case 'Wizard':
                    UpgradesEmbed.setColor('#3160b2');
                    UpgradesEmbed.setThumbnail('https://cdn.discordapp.com/attachments/722937222772293722/724673255809744936/Perk_RoleIcon_Hero_Wizard.png');
                    break;
                default:
                    UpgradesEmbed.setColor('#e01d82');
                    break;

            }
            message.channel.send(UpgradesEmbed);
        }
    }
}

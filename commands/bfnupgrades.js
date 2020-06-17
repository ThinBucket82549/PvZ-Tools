const Discord = require('discord.js');
const { version } = require('../config/config.json');

const UpgradesEmbed = new Discord.MessageEmbed()
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .setFooter(`Version - ${version}`);

/*let pages = [];
let page = 1;*/


module.exports = {
    name: 'bfnupgrades',
    description: 'Shows BFN upgrades',
    execute(message, args){
        if (args[0] === 'Peashooter' || args[0] === 'peashooter')
        {
            /*
            let pages = ['Combo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\nPro Spitter\t<:upg:722549190097371237>1\nReload Gatling\t<:upg:722549190097371237>2\nLast Ditch\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\n\nType pvz.next to go to the next page.',
                        'Combat Adrenaline\t<:upg:722549190097371237>3\nExplosive Gatling\t<:upg:722549190097371237>3\nHoming Pea\t<:upg:722549190097371237>3\nBean Party\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nEscape Roots\t<:upg:722549190097371237>3\nFeed the Beast\t<:upg:722549190097371237>4\nParty Time\t<:upg:722549190097371237>5\n\nType pvz.previous to go to the previous page.'];
            let page = 1;
            */
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
            + 'Speedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nCornucopia\t<:upg:722549190097371237>3\n<:legendary_upg:722632525796737055>Shogun Guard\t<:upg:722549190097371237>5');
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
            + 'Leveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nBlossom\t<:upg:722549190097371237>3\nFull Bloom\t<:upg:722549190097371237>3\nCocoon\t<:upg:722549190097371237>3\nPocket Protection\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nHard Target\t<:upg:722549190097371237>3\nRecharge\t<:upg:722549190097371237>4\nSunslinger\t<:upg:722549190097371237>4\nCombat Aura\t<:upg:722549190097371237>4');
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
            UpgradesEmbed.setDescription('Combo\t<:upg:722549190097371237>1\nRefreshing Revive\t<:upg:722549190097371237>1\nRough Patch\t<:upg:722549190097371237>1\nLow Life\t<:upg:722549190097371237>1\nJumper Cabes\t<:upg:722549190097371237>2\nMalfunction\t<:upg:722549190097371237>2\nTurbulence\t<:upg:722549190097371237>2\nFearless\t<:upg:722549190097371237>2\nLeveling Up\t<:upg:722549190097371237>2\nCritical Blow\t<:upg:722549190097371237>3\nMaelstorm\t<:upg:722549190097371237>3\n'
            + 'Chain Lightning\t<:upg:722549190097371237>3\nSpeedy\t<:upg:722549190097371237>3\nVampiric\t<:upg:722549190097371237>3\nAplification\t<:upg:722549190097371237>3\nReady Up\t<:upg:722549190097371237>3\nCooling Sparks\t<:upg:722549190097371237>4\nConduction\t<:upg:722549190097371237>4\nJazz Hands\t<:upg:722549190097371237>4\nDefibrillated\t<:upg:722549190097371237>5');
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
        else{
            UpgradesEmbed.setColor('#ff0000');
            UpgradesEmbed.setTitle('Error');
            UpgradesEmbed.setDescription('Invalid class. Please refer to the documentary - <placeholder>')
            message.channel.send(UpgradesEmbed);
        }
    }
}

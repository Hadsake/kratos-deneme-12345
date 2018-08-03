const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (bot,message,args) => {

 let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setTitle("En iyi arkadaşını etiketle!")
 .setImage(`http://diarigran.cat/wp-content/uploads/2016/11/375135741.jpg`);

 message.channel.send(embed);


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Arkadaşın'],
  permLevel: 0
};

exports.help = {
  name: 'arkadaşın',
  description: 'En iyi arkadaşını gösterir.',
  usage: 'arkadaşın'
};

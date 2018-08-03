
const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

 let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setTitle("Anime:dolls:")
 .setImage('https://media1.tenor.com/images/220f73606f3f7be8ff102817542ade51/tenor.gif?itemid=6062105');

 message.channel.send(embed);


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anime'],
  permLevel: 0
};

module.exports.help= {
  name:"anime",
  description: 'Anime resmi gösterir.',
  usage: 'anime'
};

const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (bot,message,args) => {

 let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .addField("+Kebap dimi abi", "-Evet koçum bırak git")
 .setImage(`https://img.yemektarifleri.com/photos/25002/1511359459_400.jpg`);

 message.channel.send(embed);


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kebap'],
  permLevel: 0
};

exports.help = {
  name: 'kebap',
  description: 'Kebap getirir.',
  usage: 'kebap'
};

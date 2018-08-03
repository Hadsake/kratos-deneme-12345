
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (bot,message,args) => {

 let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setTitle("Twerk vakti!:peach:")
 .setImage(`https://cf.kizlarsoruyor.com/q4873745/4bdd5915-4b2e-400b-9f93-4aeaf22efa9d.gif`);

 message.channel.send(embed);


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Twerk'],
  permLevel: 0
};

exports.help = {
  name: 'twerk',
  description: 'Twerk resmi atar.',
  usage: 'twerk'
};

const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (bot,message,args) => {

 let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .addField("Türk dili, dillerin en zenginlerindendir.", "-Mustafa Kemal Atatürk")
 .setImage(`https://cdn.discordapp.com/attachments/427449811470385167/471243728087023626/1523044549_NEFER1.gif`);

 message.channel.send(embed);


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Atatürk'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: "Atatük'ün resmini gösterir.",
  usage: 'atatürk'
};

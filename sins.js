const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (bot,message,args) => {

 let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setTitle("Johnny Sins Reis :point_right: :ok_hand: ")
 .setImage(`https://media.giphy.com/media/OnWgNcqF3OTBK/giphy.gif`);

 message.channel.send(embed);


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sins'],
  permLevel: 0
};

exports.help = {
  name: 'sins',
  description: 'Johnny Sins gösterir.',
  usage: 'sins'
};

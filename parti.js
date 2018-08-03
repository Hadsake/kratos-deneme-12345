
const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

 let embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setTitle(":fireworks:Bugün parti var:fireworks:")
 .setImage(`https://i.gifer.com/ZPhY.gif`);

 message.channel.send(embed);


}

module.exports.help= {
  name:"parti",
  description: 'Parti yaparsınız.',
  usage: 'parti'
}

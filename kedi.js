const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

 let {body} = await superagent
 .get(`http:\/\/aws.random.cat\/meow`);

 let dogembed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setTitle("Kedi :cat:")
 .setImage(body.file);

 message.channel.send(dogembed);


}

module.exports.help= {
  name:"kedi",
  description: 'Rastgele bir kedi resmi gösterir.',
  usage: 'kedi'
}

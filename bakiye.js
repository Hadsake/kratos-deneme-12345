const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args,) => {

 if(!coins[message.author.id]){
   coins[message.author.id] = {
     coins: 0
   };
 }

 let uCoins = coins[message.author.id].coins;

 let coinEmbed = new Discord.RichEmbed()
 .setAuthor(message.author.username, message.author.avatarURL)
 .setColor("#77f442")
 .addField("💸💰", `Şuan bakiyende ${uCoins} TL var.`);

 message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name:"bakiye",
  description: 'Bakiyenizdeki parayı gösteirir.',
  usage: 'bakiye'
}

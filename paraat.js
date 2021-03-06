const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../coins.json");
module.exports.run = async (bot, message, args,) => {

  if(!coins[message.author.id]){
    return message.reply("Hiç bozuk paran yok!")

}

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.reply("Orada yeterli para yok!")

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author}, ${pUser} adlı kişiye ${args[1]} TL verdi.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)

  });

}

module.exports.help = {
  name:"paraat",
  description: "Birisine TL atarsınız.",
  usage: 'paraat [@kullanıcı] 10'
}

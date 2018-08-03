
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
message.delete();
  console.log("t!istatistik komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")

   const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Turbo Botu | turbobot.ml', bot.user.avatarURL)
  .addField("» Botun Sahibi", "<@396663805456809988>")
  .addField("» Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField("» Çalışma süresi", duration)
  .addField("» Kullanıcılar", bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» Sunucular", bot.guilds.size.toLocaleString(), true)
  .addField("» Kanallar", bot.channels.size.toLocaleString(), true)
  .addField("» Discord.JS sürüm", "v"+Discord.version, true)
  .addField("» Ping", bot.ping+" ms", true)
  .addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=440224331377934376&scope=bot&permissions=2146958591)", )
  .addField("**❯ Destek sunucusu**", " [Sunucumuza Katıl](https://discord.gg/FE5Mpth) ", )
  .addField("**❯ Sitemiz**", " [Turbo Bot Sitesi](http://turbobot.ml) ", ) 
  return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistik gösterir.',
  usage: 'istatistik'
};

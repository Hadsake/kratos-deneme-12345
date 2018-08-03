const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../botconfig.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarına bilgi mesajımı attım! :postbox: ');
    message.channel.send(ozelmesajkontrol) }
	const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("**❯ Yapımcı**", "<@396663805456809988>", )
    .addField("**❯ Sürüm**", " v0.0.1 ", )
    .addField("**❯ Yapım Tarihi**", " 15 Ocak 2018", )
    .addField("**❯ Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=440224331377934376&scope=bot&permissions=2146958591)", )
    .addField("**❯ Destek sunucusu**", " [Sunucumuza Katıl](https://discord.gg/FE5Mpth) ", )
    .addField("**❯ Sitemiz**", " [Turbo Bot Sitesi](http://turbobot.ml) ", )
    .setThumbnail("https://forum.gamer.com.tr/attachments/bilgi-png.55209/");
    return message.author.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};


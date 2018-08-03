const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.send(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**Turbo Bot Sitesi** -> http://turbobot.ml');
    return message.author.send(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['site'],
  permLevel: 0
};

exports.help = {
  name: 'site',
  description: 'Botun kendi sitesini gösterir',
  usage: 'site'
};

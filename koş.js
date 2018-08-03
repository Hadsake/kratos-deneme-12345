const Discord = require('discord.js');
const ayarlar = require('../botconfig.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Koş lan koş zayıflarsın.')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.tenor.com/images/67d019794cfe0eafdb86a57daac3acf2/tenor.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'koş',
  description: 'Koşarsınız.',
  usage: 'koş'
};

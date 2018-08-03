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
      const embed = new Discord.RichEmbed()
    .setAuthor('Koca yürekli ' + message.author.username + ' herkese çay ısmarladı!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`http://www.bartin.info/images/haberler/herkese_benden_cay_h9773.jpg`)
    return message.channel.send(embed);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'herkesebendençay',
  description: 'Herkese çay ısmarlarsınız!',
  usage: 'herkesebendençay'
};

const Discord = require('discord.js');
const ayarlar = require('../botconfig.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
   const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Çaya şeker attı!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://68.media.tumblr.com/54052861b55d3ef2432eb84263f547c0/tumblr_nx93foAYRo1s22rc8o1_500.gif`)
    return message.channel.send(embed);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çayaşekerat'],
  permLevel: 0
};

exports.help = {
  name: 'çayaşekerat',
  description: 'Çaya şeker atar.',
  usage: 'çayaşekerat'
};

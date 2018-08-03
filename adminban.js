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
    .setAuthor('Admin vurdu ve gol oldu!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://images-ext-1.discordapp.net/external/171uiKxRgITAipvhLwQWRN0gDHVsry0MC9oYnff9Vnw/http/i.imgur.com/O3DHIA5.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['adminban'],
  permLevel: 0
};

exports.help = {
  name: 'adminban',
  description: 'Dene ve Gör :D',
  usage: 'adminban'
};

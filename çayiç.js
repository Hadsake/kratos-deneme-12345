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
    .setAuthor(message.author.username + 'Çay içti!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://images-ext-1.discordapp.net/external/JYiaThRlKzJ80pvIAKWGAzz1YTU84Y-sR17HzUWznHo/http/cdn.yemek.com/mncrop/940/625/uploads/2015/04/turkiyede-cay-kulturu22.jpg?width=374&height=250`)
    return message.channel.send(embed);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çayiç'],
  permLevel: 0
};

exports.help = {
  name: 'çayiç',
  description: 'Çay içer.',
  usage: 'çayiç'
};

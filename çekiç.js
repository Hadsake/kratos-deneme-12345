const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime çekiç atcağımı yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana :hammer: attı. canın acımış olmalı!**')
    .setImage(`https://cdn.pixabay.com/photo/2014/04/03/11/52/hammer-312416_960_720.png`)
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çekiç'],
  permLevel: 0
};

exports.help = {
  name: 'çekiç',
  description: 'İstediğiniz kişiye çekiç atarsınız.',
  usage: 'çekiç'
};

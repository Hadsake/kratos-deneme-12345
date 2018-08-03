const Discord = require('discord.js');
const ayarlar = require('../botconfig.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor('ff3030')
  .addField("**Yetkili Komutları**", `t!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nt!at  = İstediğiniz Kişiyi Sunucudan Atar. \nt!unban = İstediğiniz Kişinin Yasağını Açar. \nt!sustur = İstediğiniz Kişiyi Susturur. \nt!oylama = Oylama Açar. \nt!duyuru = Güzel Bir Duyuru Görünümü Sağlar. \nt!kilit = Kanalı istediğiniz kadar süreyle kitler. \nt!temizle = Belirlenen miktar mesajı siler. \nt!uyar = İstediğiniz kişiyi uyarır. \nt!terfi = Kullanıcıyı terfi ettirir. \nt!reklamtaraması = Oynuyor kısmındaki reklamları tarar. \nt!seskanalıaç = Bir ses kanalı açar \nt!yaz = Bota istediğiniz şeyi yazdırırsınız.`)
  .setFooter('')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(`= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili komutlarını gösterir.',
  usage: 'yetkili'
};

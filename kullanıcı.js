const Discord = require('discord.js');
const ayarlar = require('../botconfig.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor('ffe413')
  .addField("**Kullanıcı Komutları:**", `t!avatar = Kendinizin veya başka birinin avatarını gösterir. \nt!sunucuresmi = BOT sunucunun resmini atar. \nt!kullanıcıbilgim = Sizin hakkınızda bilgi verir. \nt!sunucubilgi = BOT sunucu hakkında bilgi verir. \nt!linkkısalt = Verilen linki is.gd linkine dönüştürür. \nt!havadurumu = Bir lokasyon içindeki hava durumunu gösterir. \nt!hesapla = Belirtilen işlemi yapar. \nt!şifre = Rastgele bir şifre oluşturur. \nt!seviye = Kaçıncı seviyede olduğunuzu gösterir. \nt!bakiye = Bakiyenizdeki paranızı gösterir. \nt!paraat = Birisine TL atarsınız. \nt!unafk = Afklıktan çıkarsınız. \nt!hkod = hastebin.com script paylasir. \nt!afk = Afk moduna geçersiniz. \nt!roller = Sunucudaki bütün rolleri gösterir. \nt!discrim = Belirtilen Tag'a sahip kişileri belirtir. \nt!saat = Sadece TÜRKİYE saatini gösterir. \nt!lmgtfy = Google'da arama yapar.`)
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
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı komutlarını gösterir.',
  usage: 'kullanıcı'
};

const Discord = require('discord.js');
const ayarlar = require('../botconfig.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor('fffaf0')
  .addField("**Eğlence Komutları:**", `t!adminban = dene ve gör! \nt!herkesebendençay = Herkese çay alırsınız. \nt!koş = Koşarsınız. \nt!çayiç = Çay içersiniz. \nt!çekiç = İstediğiniz kişiye çekiç atarsınız. \nt!çayaşekerat = Çaya şeker atarsınız. \nt!yumrukat = Yumruk atarsınız. \nt!kedi = Kedi resmi atar. \nt!köpek = Köpek resmi atar. \nt!kurabiye = Sana kurabiye verir. \nt!sor = Bota soru sormanızı sağlar. \nt!emojiyazı = Mesajınızı emoji haline getirir. \nt!slots = Slots oyunu oynatır. \nt!stresçarkı = Sizin için bir stres çarkı çevirir. \nt!woodie = Woodie the Lumberjack hakkında bilgi verir. \nt!yazıtura = Yazı-Tura atar. \nt!şanslısayım = Şanslı sayınızı gösterir. \nt!parti = Parti resmi gönderir. \nt!espri = Espri yapar. \nt!anime = anime fotoğrafları gösterir. \nt!bilezik = Altın bilezik gösterir. \nt!arkadaşın = En iyi arkadaşını gösterir. \nt!atatürk = Atatük'ün resmini gösterir. \nt!resim = Rasgele 1 tane resim atar. \nt!hayvan = Hayvan Gösterir. \nt!kaçcm = Kaç cm olduğunu gösterir.`)
  .setTitle("")
  .setFooter('Sayfa 1 | Sayfa 2 için [t!eğlence2]')
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
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence'
};

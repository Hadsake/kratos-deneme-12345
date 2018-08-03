const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
   message.channel.send('Espri yükleniyor.').then(message => {
      var espriler = ['Seni görünce; Gözlerim dolar.','Kulaklarım euro.','Kar üzerinde yürüyen adama ne denir. Karabasan.','Yıkanan Ton’a ne denir Washington!','Gidenin arkasına bakmayın yoksa geleni göremezsiniz.','+Oğlum canlılardan örnek ver. -Kedi, köpek. +Cansızlara örnek ver. -Ölü kedi, ölü köpek.','+Kanka ben banyoya 3 kişi giriyom. -Oha nasıl? +Hacı, Şakir ve ben. -Defol lan!','+Kocanızla ortak özelliğiniz ne -Aynı gün evlendik.','+Evladım ödevini neden yapmadın -Bilgisayarım uyku modundaydı,uyandırmaya kıyamadım.','+Bizim arkadaş ortamında paranın lafı bile olmaz. -Niye ki? +Çünkü hiç birimizin parası yok.','Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.','+Acıkan var mı ya -Yok bizde tatlı kan var.','Yılanlardan korkma,yılmayanlardan kork.','+Baykuşlar vedalaşırken ne der -Bay bay baykuş.','Beni Ayda bir sinemaya götürme,marsta bir sinemaya götür.','Aaa siz çok terlemişsiniz durun size terlik getireyim.','Aklımı kaçırdım, 100.000 TL fidye istiyorum.'];
       var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri yapar.',
  usage: 'espri'
};

const Discord = require('discord.js');
const ayarlar = require('../botconfig.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor('fffaf0')
  .addField("**Eğlence Komutları:**", `t!isim = Rasgele yabancı isim söyler. \nt!mcödül = Kanala Minecraft başarı resmi gönderir. \nt!rastgele-renk = Rasgele renk söyler. \nt!sins = Johnny Sins gösterir. \nt!twerk = Twerk resmi atar. \nt!kebap = Kebap getirir. \nt!zarat = Zar atar.`)
  .setTitle("")
  .setFooter('Sayfa 2 | Sayfa 1 için [t!eğlence]')
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
  name: 'eğlence2',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence2'
};

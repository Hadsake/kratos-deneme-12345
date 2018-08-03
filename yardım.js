const Discord = require('discord.js');
const ayarlar = require('../botconfig.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor(0x00ffff)
  .addField('Turbo | Tüm Komutların Listesi', 't!anakomutlar: Ana komutlarını gösterir. \nt!kullanıcı: Kullanıcı komutlarını gösterir. \nt!eğlence: Eğlence komutlarını gösterir. \nt!yetkili: Yetkili komutlarını gösterir. \nt!nsfw: NSFW komutlarını gösterir.')
  .setFooter('Komut hakkında t!yardım [komutismi] ile yardım alabirsiniz!')
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
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};

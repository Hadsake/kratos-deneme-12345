const Discord = require('discord.js');
const ayarlar = require('../botconfig.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("")
  .setDescription('')
  .setColor('ffde66')
  .addField("**Ana Komutları**", "t!yardım = BOT komutlarını atar. \nt!bilgi = BOT kendisi hakkında bilgi verir. \nt!ping = BOT gecikme süresini söyler. \nt!davet = BOT davet linkini atar. \nt!istatistik = BOT istatistiklerini atar. \nt!bug = Bug bildirir. \nt!ailemiz = Tüm turbo bot ekli sunucuları gösterir. \nt!destek = Botun destek sunucusunu gösterir. \nt!prefix = Botun prefixsini değiştirir. \nt!site = Turbo Bot'un sitesini gösterir. \nt!yapımcı = Bot'un yapımcısını gösterir.")
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
  aliases: ['anakomutlar'],
  permLevel: 0
};

exports.help = {
  name: 'anakomutlar',
  description: "Bot'un Ana komutlarını gösterir.",
  usage: 'anakomutlar'
};

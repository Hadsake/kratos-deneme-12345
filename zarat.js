
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Zar Atılıyor...').then(message => {
      var espriler = ['**Çıkan Sayı: 1**','**Çıkan Sayı: 2**','**Çıkan Sayı: 3**','**Çıkan Sayı: 4**','**Çıkan Sayı: 5**','**Çıkan Sayı: 6**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['zarat', 'zar-at', 'atzar', 'atbizar'],
  permLevel: 0
};

exports.help = {
  name: 'zarat',
  description: 'Zar atar.',
  usage: 'zarat'
};

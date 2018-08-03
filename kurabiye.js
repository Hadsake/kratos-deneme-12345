const Discord = require('discord.js');

exports.run = function(client, message, args) {
  message.channel.send(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
  message.react("🍪")


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};
exports.help = {
  name: 'kurabiye',
  description: 'Sana kurabiye verir.',
  usage: 'kurabiye'
};

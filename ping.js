const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply(':ping_pong: Pingim **' + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping','p'],
  permLevel: 0
};
exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
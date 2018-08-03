const Discord = require('discord.js');
const client = new Discord.Client();
var catNames = require('cat-names');

exports.run = (client, message) => {
 
        name = catNames.random()
        message.channel.send(name)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['isim'],
  permLevel: 0
};

exports.help = {
  name: 'isim',
  description: 'Rasgele yabancı isim söyler.',
  usage: 'isim'
};

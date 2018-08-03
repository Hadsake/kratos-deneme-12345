const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: (message.author.username),
                    icon_url: (message.author.displayAvatarURL)
                  },
                description: "**:negative_squared_cross_mark:  Artık Afk Değilsin!**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkkapat'],
  permLevel: 0
};

exports.help = {
  name: 'unafk',
  description: 'Afklıktan Çıkarsınız.',
  usage: 'unafk'
}

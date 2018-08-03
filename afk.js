const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: (message.author.username),
                    icon_url: (message.author.displayAvatarURL)
                  },
                description: "**:white_check_mark:  Artık Afksın**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkaç'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Afk olursunuz.',
  usage: 'afk'
}

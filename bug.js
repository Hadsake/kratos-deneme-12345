const Discord = require('discord.js');
const hook = new Discord.WebhookClient('469464471203610624', '1Kl6lNG0sF7UX6-87fAfkNNK2hJQHV1iFOmUVmCAdZRRXQaBSZavRRLV9HnZd-6sw3b5');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Bana Bug Bildireceksin');
  message.delete();
  hook.send('**' + message.author.username + '** **#' + message.author.discriminator + '** Adlı kişi bug bildirdi. **Bug ise** -> ' + '**' + mesaj + '**');
  message.reply('Bana bugu bildirdiğin için teşekkür ederim.')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Bug Bildirir',
  usage: 'bug'
};

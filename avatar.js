const Discord = require('discord.js');

exports.run = (client, message, args) => {
let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor([0,101,255])
  .setImage(mention.avatarURL)
  .addField('Avatar Sistemi', `[Avatarın büyük halini göster!](${mention.avatarURL})`, false);
  message.react("????");
  message.channel.send(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor([0,101,255])
  .setImage(message.author.avatarURL)
  .addField('Avatar Sistemi', `[Avatarın büyük halini göster!](${message.author.avatarURL})`, false);
  message.channel.send(avatarEmbedYou);
  return;
}
message.channel.send("Bir hata oluştu!");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar', 'avatarbul'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Kendinizin veya Başka Birinin Avatarını Gösterir.',
  usage: 'avatar @kullanıcı'
};

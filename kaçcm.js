const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
   message.channel.send('Büyüklüğü yükleniyor.').then(message => {
      var espriler = ['8cm','9cm','10cm','11cm','12cm','13cm','14cm','15cm,Biraz büyükmüş','16cm','17cm','18cm','19cm','20cm,Hacı seninki büyükmüş','30cm,Dev gibi!!','40cm,Üff','50cm,Sen neler diyorsun'];
       var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Kaç cm olduğunu gösterir.',
  usage: 'kaçcm'
};

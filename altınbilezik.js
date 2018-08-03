const Discord = require('discord.js');
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./altin.sqlite");

exports.run = (client, message) => {
   sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points - 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points - 10}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.channel.send({embed: {
          author: {
            name: (message.author.username),
            icon_url: message.author.avatarURL
          },
          "image": {
          url:"https://st3.myideasoft.com/shop/zr/36/myassets/products/179/3528.jpg?revision=1475157085"},
          color: 0xD97634,
          title: "Bilezik aldın :ring:",
          description: `Bilezik aldın karına takarsın artık :bride_with_veil:`
        }})
    };
      sql.run(`UPDATE scores SET points = ${row.points - 5} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });
    message.channel.send({embed: {
          author: {
            name: (message.author.username),
            icon_url: message.author.avatarURL
          },
           "image": {
          url:"https://st3.myideasoft.com/shop/zr/36/myassets/products/179/3528.jpg?revision=1475157085"},
          color: 0xD97634,
          title: "Bilezik aldın :ring:",
          description: `Bilezik aldın karına takarsın artık :bride_with_veil:`
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilezik'],
  permLevel: 0
};

exports.help = {
  name: 'bilezik',
  description: 'Altın Bilezik Gösterir.',
  usage: 'bilezik'
};

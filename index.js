const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const weather = require('weather-js');
const fs = require("fs");
const snekfetch = require('snekfetch');
const prefix = ">";
const bot = new Discord.Client({disableEveryone: true});
let coins = require("./coins.json");
let purple = botconfig.purple;
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 5;
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Komut bulunamadı.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`Yüklenen komut: ${f}`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on('ready', () => {
  console.log(`BOT: Aktif, Tüm komutlar yüklendi.`);
  console.log(`BOT: ${bot.user.username} adı ile giriş yapıldı!`);
  console.log(`BOT: Şuan ${bot.channels.size} adet kanala | ${bot.guilds.size} sunucuya | ${bot.users.size} kullanıcıya hizmet ediyor.`);
 bot.setInterval(() => {
      bot.user.setGame(`${bot.channels.size} kanal | ${bot.guilds.size} sunucu | ${bot.users.size} kullanıcı`, 'https://www.twitch.tv/hadsake');      
      bot.user.setGame(`t!yardım - t!davet | turbobot.ml`, 'https://www.twitch.tv/hadsake');
  }, 7000);
});// Burada 7000 yazan yeri degistirirseniz oynuyor kisminin degisme hizi suresi degisecektir 7000 7 saniye anlamina gelmektedir bunu 5000 yaparsaniz 5 saniye seklinde ayarlayabilirsiniz.
// Biz type: "" kismini WATCHING olarak ayarladik bu botun oynuyor kisminin izliyor olarak gozukmesini saglayacaktir, isterseniz WATCHING yerine PLAYING yazip normal sekilde oynuyor olarak gorunmesini veya STREAMING yapip yayinda olarak gorunmesini saglayabilirsiniz. 
//'https://www.twitch.tv/hadsake' { type: "STREAMING" }


bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#5ff441")
  .addField("💸💰", `Bedavaya ${coinAmt} TL aldın!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(2000)});
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setField('Seviye Atladın!')
    .setColor("#42f4b0")
    .addField("Yeni Seviyen!", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("Komutlar arasında 5 saniye beklemelisin.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'giriş-çıkış');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
  .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
  .setTitle('Üye Katıldı;')
  .setDescription(`Sunucuya Katıldı [${member.guild.memberCount} Üye]!`)
  .setFooter('Turbo Bot', member.guild.iconURL)
  .setTimestamp()
  channel.send(embed);
});

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'giriş-çıkış');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
  .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
  .setTitle('Üye Ayrıldı;')
  .setDescription(`Sunucudan Ayrıldı [${member.guild.memberCount} Üye]!`)
  .setFooter('Turbo Bot', member.guild.iconURL)
  .setTimestamp()
  channel.send(embed);
});

bot.on("channelCreate", async channel => {

  console.log(`${channel.name} Kanalı oluşturuldu.`);

  let sChannel = channel.guild.channels.find(`name`, "kayıtlar");
  sChannel.send(`${channel} Kanalı oluşturuldu.`);

});

bot.on("channelDelete", async channel => {

  console.log(`${channel.name} Kanalı Silindi.`);

  let sChannel = channel.guild.channels.find(`name`, "kayıtlar");
  sChannel.send(`${channel.name} Kanalı Silindi.`);

});

bot.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
     message.react("🇦")
     message.react("🇸")
  }
});

bot.on('message', msg => {
  if (msg.content === 'iyi akşamlar') {
    msg.reply('İyi Geceler Tatlı Rüyalar. :sunglasses: ');
  }
});

bot.on('message', msg => {
  if (msg.content === 'bb') {
    msg.reply('Görüşmek Üzere :hand_splayed::skin-tone-5:  ');
  }
});

bot.on('message', msg => {
  if (msg.content === 'Selamun Aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin iyi Eğlenmeler  ');
  }
});

bot.on('message', msg => {
  if (msg.content === 'günaydın') {
    msg.reply('Good Morning Günaydın.');
  }
});
bot.on('message', msg => {
  if (msg.content === 'iyi geceler') {
    msg.reply('Bay Bay Görüşmek Üzere..');
  }
});
bot.on("message", message => {
  const kufur = ["amk", "sikerim"];
  if (kufur.some(word => message.content.includes(word)) ) {
    message.reply("**Küfür Etme!** :rage:")
    message.delete()
  }
});

bot.on('message', msg => {
  if (msg.content.toLowerCase() === 'hayırsız bot') {
    msg.reply('**Öyle Olsun :sob: :sob:** ');
  }
});

bot.on("message", message => {
  const dmchannel = bot.channels.find("name", "🔧sistem🔧");
   if (message.channel.type === "dm") {
   if (message.author.id === bot.user.id) return;
     dmchannel.send("", {embed: {
       color: 3447003,
       title: `Yazan: ${message.author.tag}`,
       description: `${message.content}`
     }})
    }
   if (message.channel.bot) return;
});

bot.on("message", (message) => {
  
  msg = message.content.toLowerCase();
  
  if (message.author.bot) return;
  
  mention = message.mentions.users.first();
  
  if (msg.startsWith (prefix + "dm")) {
    if (mention == null) { return; }
  message.delete();
  mentionMessage = message.content.slice (8);
  mention.send(mentionMessage);
  message.channel.send(":white_check_mark: Mesaj Başarıyla Gönderildi!");
}
});

bot.on('message', msg => {
  if (/(https?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite)\/.+/.test(msg.content)) return msg.delete()
  .then(() => msg.reply('**Reklam Engellendi:shield:**'));
  });
 
bot.login(tokenfile.token);

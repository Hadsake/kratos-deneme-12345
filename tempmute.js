const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Geçersiz bir Kullanıcı yazdınız. Lütfen tekrar deneyin.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Susturmam içi bir **Zaman** yaz! **Örn:10s**");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "RANDOM",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Bir zaman belirlemedin!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Susturuldu! ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> kullanıcının Sesi Açıldı!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "sustur",
  description: 'İstediğiniz Kişiyi susturur.',
  usage: 'sustur [kullanıcı][bir zaman yazın **örn:10s**]'
}

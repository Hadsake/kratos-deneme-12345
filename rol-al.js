
const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "yardım"){
    message.reply("Kullanımı: t!rolal <kullanıcı> <rol>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Bu kullanıcı bulunamadı");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Bir rol belirtin!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Bu rol bulunamadı.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Böyle bir rol yok.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`${gRole.name} rolünü kaybettiniz.`)
  }catch(e){
    message.channel.send(`RIP to <@${rMember.id}>, We removed ${gRole.name} from them. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "rolal"
}

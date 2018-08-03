const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "yardım") {
    message.reply("Kullanım: t!rolver <kullanıcı> <rol>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Bir rol belirtin!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Bu rol bulunamadı.");

  if (rMember.roles.has(gRole.id)) return message.reply("Kullanıcı zaten bu role sahip!");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Tebrikler, size ${gRole.name} rolü verildi.`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Tebrikler <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "rolver"
}

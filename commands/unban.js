  const Discord = require("discord.js");
  const botconfig = require("../botconfig.json");
  
  module.exports.run = async (bot, message, args) => {
    let tounban = args[0];
    if(!args[0] || args[0] === "help") return message.channel.send("Usage: unban <user id shown in the Ban report>");
  
  
  let embed = new Discord.RichEmbed()
  .setTitle("Unban Report")
  .addField("Unbanned user", `<@${tounban}>`)
  .addField("Unbanned by", message.author)
  .setColor(botconfig.cyan)
  .setTimestamp();
  
  message.channel.send(embed);
  message.delete().catch(O_o=>{});
  message.guild.unban(tounban);
  }
  
  
  module.exports.help = {
  name: "unban"
  }

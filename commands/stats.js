const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {

  let sEmbed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setTitle(`${message.author.username}`)
  .addField("Joined At", message.member.joinedAt)
  .setColor(botconfig.yellow)
  .setTimestamp();


  message.delete().catch(O_o => {});
   message.channel.send(sEmbed);


}

module.exports.help = {
  name: "stats"
}
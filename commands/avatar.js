const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
  let user = message.mentions.users.first() || message.author;
  
  //avatar avatar embed
    let avatarembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s avatar'`)
    .setFooter("MBR:Nice Avatar")
    //footer description
    .setImage(user.displayAvatarURL)
    //user's avtar
   .setColor("#ffe43d")
   .setTimestamp();
  //deletes message
  message.delete();
   //sends avatar
  message.channel.send(avatarembed);
}

module.exports.help = {
  name: "avatar"
}

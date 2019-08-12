const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const ms = require("ms");

module.exports.run = async(bot, message, args) => {
let toban = message.mentions.members.first();
     let reason  = args.slice(2).join(" ");
     if(!args[0] || args[0] === "help") return message.channel.send("Usage: ban <user> <time in seconds> <reason>");
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Permission Denied");
     if(toban.hasPermission("ADMINISTRATOR")) return message.reply("I can't ban him");
     if(!reason){
       let reason = "No reason specified"
     }
     
       let bantime = args[1];
  if(!bantime) return message.channel.send("Please specify the ban duration");

  await(toban.ban);

  setTimeout(function(){
    message.guild.unban(toban);
    message.channel.send(`**<@${toban.id}> has been unbanned!**`);
  }, ms(bantime));
     

     
     let embed = new Discord.RichEmbed()
     .setTitle("Ban report")
     .addField("Banned user", `${toban.user.username}#${toban.user.discriminator} **ID:** ${toban.user.id}`)
     .addField("Reason:", `${reason ? reason : "None"}`)
     .addField("Banned by", `${message.author}`)
     .addField("Time", `${ms(ms(bantime))}`)
     .setColor(botconfig.green)
     .setTimestamp();
     
     
     message.delete().catch(O_o=>{});
     toban.ban(reason);
     message.channel.send(embed);
     toban.send(`**You were banned from ${message.guild.name} by ${message.author} for ${reason}**`);
}


module.exports.help = {
 name: 'ban',
 usage: 'ban <user> <reason>'    
}

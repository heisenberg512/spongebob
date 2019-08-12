const Discord = require("discord.js");
const botconfig = require("../botconfig.json");


module.exports.run = async(bot, message, args) => {
  let cembed = new Discord.RichEmbed()

 .setTitle("Commands")
 .addField("roast", "insults/roasts the targeted user")
 .addField("avatar", "send an enalarged image of the user's avatar")
 .addField("ban", "bans the targeted user")
 .addField("meme", "sends random memes")
 .addField("unban", "unbans the targeted user")
 .addField("stats", "shows user's stats")
 .addField("weather", "sends the weather forcast of a particular city,country")
 .setColor(botconfig.green)
 .setTimestamp();

 message.delete();
 message.channel.send(cembed);
}

module.exports.help = {
    name: "commands"
}

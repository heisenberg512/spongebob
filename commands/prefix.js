const Discord = require("discord.js");
const prefixes = require("../prefixes.json")
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  if(!args[0] || args[0 == "help"]) return message.reply(`Usage: <prefix>prefix <desired prefix here>` );

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if(err) console.log(err)
  });
let pEmbed = new Discord.RichEmbed()
.addField("New Prefix", `${args[0]} is the new prefix`)
.setColor("#00FF00")

message.delete();
message.channel.send(pEmbed);

}


module.exports.help = {
  name: "prefix"
}

const Discrod = require("discord.js");


module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry but you don't have permission");
  if(!args[0]) return message.channel.send("**USAGE: #purge <number of messages to delete>**");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
message.delete();
}


module.exports.help = {
  name:"purge"
}

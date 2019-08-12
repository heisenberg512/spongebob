const Discord = require("discord.js");
const ms = require("ms");
const bot = new Discord.Client();



module.exports.run = async (bot, message, args) => {
    //

message.delete().catch(O_o => {});
message.channel.send("Pong...").then(msg => {
  msg.edit(`:heartbeat: ${bot.ping} ms`);
})

}

module.exports.help = {
  name: "ping"
}

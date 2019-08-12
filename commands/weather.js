const Discord = require("discord.js");
const weather = require("weather-js");
const botconfig = require("../botconfig.json");

module.exports.run = async(bot, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
    if(err) console.log(err);

    if(!args[0] || args[0 == "help"]) return message.channel.send(`Usage: ${botconfig.prefix}weather <location>`);



  var current = result[0].current;
  var location = result[0].location;

  let wembed = new Discord.RichEmbed()
   .setDescription(`**${current.skytext}**`)
   .setAuthor(`Weather for ${current.observationpoint}`)
   .setThumbnail(current.imageURL)
   .setColor(botconfig.green)
   .addField("Timezone", `UTC${location.timezone}`, true)
   .addField("DegreeType", location.degreetype, true)
   .addField("Temperature", `${current.temperature} degrees`, true)
   .addField("Feels Like", `${current.feelslike} degrees`, true)
   .addField("Winds", `${current.winddisplay}`, true)
   .addField("Humidity", `${current.humidity}%`, true)
   .setTimestamp();


     message.channel.send(wembed);

  });


}

module.exports.help = {
  name: "weather"
}

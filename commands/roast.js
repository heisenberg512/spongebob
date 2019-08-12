const Discord = require ("discord.js");

module.exports.run = async(bot, message, args) =>{
    let ruser = message.mentions.users.first();
    let chance = Math.floor(Math.random() * 20);
    if(!args[0] || args[0] === "help") return message.reply(`**USAGE: #roast <user>**`);
   // if(ruser.id = "332134348725813248")return message.reply("FK off bitch that's my creator you cunt");

    if(chance > 0 && chance < 4){
        message.channel.send(`${ruser} ki choti lulli sb se alaw`);
           
    }else if(chance >3 && chance < 7){
        message.channel.send(`${ruser} is a pussy`)
    }else if (chance >6 && chance < 10){
        message.channel.send(`${ruser} is ${message.author}'s son`)
    }else if(chance > 10 && chance < 14){
        message.channel.send(`${ruser} you don't deserve to live you worthless piece of shit`)
    }else if(chance >13 && chance < 19){
        message.channel.send(`${ruser} is carrying my baby`)
    }else message.channel.send(`${ruser} you are smarter than the people in this group go find another one `)
    
    message.delete();
} 
    

module.exports.help = {
    name: "roast"
}
const snekfetch = require("snekfetch");
const Discord = require("discord.js");
const randompuppy = require("random-puppy");


module.exports.run = async(bot, message, args) =>{
 
    let reddit = [
        "PewdiepieSubmissions",
        "MinecraftMemes",
        "comedyCemetery",
        "MemeEconomy",
        "TinyPickelRick",
        "hentaimemes"
    ]

    let subreddit = reddit[Math.floor(Math.random()* reddit.length -1 )]

    randompuppy(subreddit).then(url =>{
        snekfetch.get(url).then(async res => {
            await message.channel.send({
                files: [{
                    attachment: res.body,
                    name: "meme.png"
                }]
            }).then(() => message.channel.stopTyping());
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));

}

module.exports.help = {
    name: "meme",
    aliases: "memes"
}

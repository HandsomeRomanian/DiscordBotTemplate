const fs = require('fs');
const settings = require("./settings.json");
const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {

    console.log("Loading modules");

    fs.readdir('./modules', function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            file = file.split('.');
            // Do whatever you want to do with the file
            console.log(file);
        });
    });

    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Serving ${client.guilds.cache.size} guilds and ${client.users.cache.size} users!`);

});

client.on("message", async msg => { })

client.login(settings.DiscordToken);

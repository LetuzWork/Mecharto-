require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();
let replies = [
    '🍊 r u allright??? 😟',
    'PAM PAM',
    'tene hambre?',
    'BOOM 💣'
]

client.login(process.env.BOTTOKEN);
client.on('ready', function() { console.log('🍊'); });


client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    if (msg.channel.id == '793546205401317437' && msg.content === '!redOrange') {
        //msg.reply('🍊 r u allright??? 😟');
        let r = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[r]);
    }
}
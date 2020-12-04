console.log('Merhaba');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('Nzg0Mzg5MDI1ODUwMzI3MDUw.X8olNQ.7wTIzUf5FnFccyAWyLJlB-UcI7A');
client.on('ready',readyDiscord);

function readyDiscord(){
    console.log('<3');
}

client.on('message', gotMessage);

const tekrar= ['Say HELLO', 'Way Way', 'OO KANKA'];

function gotMessage(msg){
    console.log(msg.content);
    if(msg.content === 'Merhaba'){
        const rand = Math.floor(Math.random()*tekrar.length);
        msg.channel.send(tekrar[rand]);
    }
}
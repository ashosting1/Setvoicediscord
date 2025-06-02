const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1265825059692609587')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/apparentlyjack_rl') 
    .setState('Hey Nitro is here')
    .setName('quaaxz')
    .setDetails(`Botsystem`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('System.js') 
    .setAssetsSmallImage('') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('ra3d', 'https://ra3dstudio.com');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['MTM3MzAxNjIwOTI3MTgyMDMwOA.G61XnM.2Jj1P3fdY6zOONFjDQL-PIhhwY4fm1wDjJFHek'];
client.login(mySecret);

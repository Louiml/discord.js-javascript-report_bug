
const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageButton, MessageActionRow } = require('discord-buttons'); 
const { isArgumentsObject } = require('util/types');
require('discord-buttons')(client);

client.on("message", (message) => {
if (message.content !== `${config.command}`) return;
  const embed = new Discord.MessageEmbed()
  .setTitle(`new bug`)
  .setDescription(args.join('   ') || `**loui say:** \"he did not write anything\"`)
  .setTimestamp()
    .setFooter(`by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
  .setColor(`#0x2F3136`)

  let btn = new MessageButton()
    .setStyle("red")
    .setLabel("fix the bug")
    .setDisabled(false)
    .setID("fixed")
        let reportbtn = new MessageActionRow()
            .addComponent(btn)
        
  message.channel.send({
    button: reportbtn,
    embed: embed 
  });
})

client.on("ready", () => {
    console.log(`Creator: louiml.net`)
})

client.on('clickButton', async (button) => {
    if (button.id !== "fixed") return;
    let editbtn = new MessageButton()
    .setStyle("green")
    .setLabel("the bug fixed")
    .setDisabled(true)
    .setID("fixed")
        let row = new MessageActionRow()
            .addComponent(editbtn)
button.message.edit({
            embed: {
                color: 2223,
                title: `**fixed bug**`,
                description: `**fixed bug by**:
<@${button.clicker.user.id}>
`},
component: row
})
})

client.login("")

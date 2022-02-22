const { MessageEmbed } = require('discord.js')

exports.run = async (bot, message, args) => {

message.channel.send({embeds: [new MessageEmbed()
.setDescription(`Prefixo deste servidor : \`!\`
            
📱 ID do servidor: \|\|${message.guild.id}\|\| `)]})
}

module.exports.help = {
    name: "prefixo",
    aliases: ['prefix'],
  }

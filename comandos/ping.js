const { MessageEmbed } = require('discord.js')

exports.run = async (bot, message, args) => {
            
    const m = await message.channel
    .send(':ping_pong: Ping?')

    setTimeout(() => {
        m.edit({content: ":ping_pong: Ping?", embeds: [new MessageEmbed()
            .setDescription(`**:ping_pong:| Latencia de Edição** \`\`${~~bot.ws.ping}ms.\`\``)]})
    }, 2000 * 2);
}
exports.help = {
    name: "ping",
    aliases: ['ms'],
};    

const { MessageEmbed } = require('discord.js');
exports.run = (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({
        embeds: [new MessageEmbed()
            .setTitle('**Permissão insuficiente!**')
            .setDescription("Você precisa ter a permissão \`\`MANAGE_MESSAGES\`\` para utilizar esse comando.")]
    });
    let getMessageDelete = args.slice(0).join(" ");
    if (getMessageDelete < 2 || getMessageDelete > 1000);
    if (args.lengt === 0) return message.reply({
        embeds: [new MessageEmbed()
            .setDescription('`Value` é um argumento necessário para a execução deste comando, revise os argumentos e tente novamente.\n \n**EXEMPLO**: `10`')]
    });
    if (isNaN(args[0])) return message.reply({
        embeds: [new MessageEmbed()
            .setDescription('Você deve utlizar somente números!')]
    });

    try {
        message.channel.bulkDelete(getMessageDelete)
        message.channel.send({
            embeds: [new MessageEmbed()
                .setDescription(`<a:Sininho:675734556132769792> Fernandinho limpou ${getMessageDelete} mensagens!`)]
        }).then(msg => { setTimeout(() => msg.delete(), 5000) });
        message.delete();
    } catch (e) {
        console.log(e);
    }
}

exports.help = {
    name: "clear",
    aliases: ['limpar']
}
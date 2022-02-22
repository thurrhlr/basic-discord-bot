const { MessageEmbed, MessageActionRow, MessageButton } = require(`discord.js`);

exports.run = async (bot, message, args) => {

    let pages = ['**!prefixo** → Mostra o prefixo neste servidor.', `**!ajuda** → Mostra a lista de comandos disponíveis.
**!ping** → Mostra as informações do servidor no Minecraft.`,
`**!eval** → Executa ações.
**!clear** → Limpa o chat.`]
    let title = ['Prefixo', 'Públicos', 'Moderação']
    let page = 1;

    const embed = new MessageEmbed()
        .setColor([54, 57, 63])
        .setTitle(title[page - 1])
        .setFooter(`Página ${page}/${pages.length}`)
        .setDescription(pages[page - 1])

    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primeiro')
                .setLabel('◀')
                .setStyle('SECONDARY'),

            new MessageButton()
                .setCustomId('segundo')
                .setLabel('∎')
                .setStyle('SECONDARY'),

            new MessageButton()
                .setCustomId('terceiro')
                .setLabel('▶')
                .setStyle('SECONDARY'),
        );
    message.channel.send({ embeds: [embed], components: [row], ephemeral: true }).then(async msg => {
        const filter = (b) => b.user.id === message.author.id
        const collector = msg.createMessageComponentCollector({ filter, time: (10 * 60000) })

        collector.on('collect', (i) => {
            switch (i.customId) {
                case 'primeiro':
                    if (page === 1) return;
                    page--;
                    embed.setTitle(title[page - 1])
                    embed.setDescription(pages[page - 1]);
                    embed.setFooter(`Página ${page}/${pages.length}`);
                    msg.edit({ embeds: [embed] })
                    i.deferUpdate();
                    break;
                case 'segundo':
                    msg.delete()
                    message.delete()
                    i.deferUpdate();
                    break;
                case 'terceiro':
                    if (page === pages.length) return;
                    page++;
                    embed.setTitle(title[page - 1])
                    embed.setDescription(pages[page - 1]);
                    embed.setFooter(`Página ${page}/${pages.length}`);
                    msg.edit({ embeds: [embed] })
                    i.deferUpdate();
                    break;
            }
        })
    })

}

module.exports.help = {
    name: "help",
    aliases: ['ajuda'],
}
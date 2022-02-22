module.exports = (bot, ready) => {
    const arrayOfStatus = [
        'Spotify',
        'Youtube Music'
    ]

    console.log(`O BOT ${bot.user.username} ficou online com sucesso!`);
    setInterval(() => {
        bot.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], type: "WATCHING" })
    }, 5000)
  
  
};

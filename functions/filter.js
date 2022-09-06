module.exports = {
    filter: async (client) => {
        const insults = [
            'pute',
            'con',
            'connard',
            'connasse',
            'salope',
            'salop',
            'salaud',
            'bite',
            'chatte',
            'enculé',
            'baise',
            'bâtard',
        ]

        client.on('messageCreate', async (message) => {
            if (message.author.bot) return;
            console.log(message.content)
            if (insults.some(insult => message.content.includes(insult))) {
                await message.delete();
                await message.channel.send(`${message.author.username} Te rabaisse pas à insulter plus faible que toi !`);
            }
        })
    }
}
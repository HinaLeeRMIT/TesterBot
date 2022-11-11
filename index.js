const { CommandClient } = require('eris')

//Tests bot creation
async function init(token) {
    const TesterBot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    //Register a command
    TesterBot.on('ready', async () => {
        await TesterBot.bulkEditCommands([{
            name: 'test',
            description: 'this is a test message',
            type: 1,
        }])
        console.log(`This is a test message!`)
    })
    //Test interaction creation
    TesterBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'test') {
            await interaction.createMessage({
                content: 'Interaction test'
            })
            console.log('Interaction test')
            process.exit(0)
        }
    })
    TesterBot.connect();
}

const CommandToken = process.argv[2]
init(CommandToken);
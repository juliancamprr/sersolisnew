require('dotenv').config()
const colors = require('colors')
const { Events, GatewayIntentBits, Client } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.on(Events.ClientReady, c => {
    console.log(`[Sucesso] ${client.user.tag} foi conectado.`.bgGreen.white)
})

client.login(process.env.TOKEN_BOT);


module.exports = client
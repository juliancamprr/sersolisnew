const client = require('./discord.js')
const colors = require('colors')
const express = require('express')
const app = express()
const config = require('./config.json')
require('dotenv').config()
const routes = require('./routes/route')
const path = require('path')


app.use('/', routes)
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = 3000
app.listen(port, () => {
    console.log(`[Sucesso] servidor conectado na porta: ${port}`.bgGreen.white)
})
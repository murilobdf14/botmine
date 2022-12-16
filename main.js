const mineflayer = require('mineflayer')
const minecraftdata = require('minecraft-data')
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')

const { pathfinder, Movements, goals: { GoalNear } } = require('mineflayer-pathfinder')

//Criação e Login do BOT
const bot = mineflayer.createBot({
    host: 'br-enx-18.enxadahost.com', 
    username: 'teste', 
    port:'10734', 
        
})
//Vizualização do mundo em volta do BOT 
bot.once('spawn', ()=> {
    mineflayerViewer(bot, { port: 3007, firstPerson: false})
})


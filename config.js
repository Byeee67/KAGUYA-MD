/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
	zhir: 'https://zahirr-web.herokuapp.com',
	lol: 'https://api.lolhuman.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'apikeylu',
	'https://zahirr-web.herokuapp.com': 'zahirgans',
	'https://api.lolhuman.xyz': 'apikeylu',
}

// Other
global.owner = ['62895322095252', '16477944776', '6289688069444', '6289518487462', '6288292024190']
global.botname = 'KAGUYA BOT-MD'
global.ownername = 'BOT-KAGUYA OFC'
global.packname = 'BOT-MD'
global.author = 'CREATED BY BOT OFC'
global.sessionName = 'session'
global.prefa = ['#','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done !! Subscribe BOT OFC',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Mohon Tunggu Sebentar..',
}
global.thumb = fs.readFileSync('./lib/bayu.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

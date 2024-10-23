//Zenitsu-Bot9

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Deepak" //ur yt chanel name
global.socialm = "GitHub: DGDEEPAK" //ur github or insta name
global.location = "India, West Bengal, Darjeeling" //ur location

//new
global.botname = 'Zenitsu-Bot' //ur bot name
global.ownernumber = ['6288983776755'] //ur owner number, dont add more than one
global.ownername = '🦄Dream Guy Deepak' //ur owner name
global.websitex = "https://youtube.com/@dreamguydeepak"
global.wagc = "https://whatsapp.com/channel/0029VaDEDUaC6ZvewFKv6835"
global.themeemoji = '🦄'
global.wm = "Deepak Bot Inc."
global.botscript = 'https://github.com/DGDEEPAK/Zenitsu-Bot9' //script link
global.packname = "Zenitsu-Bot"
global.author = "🦄Dream Guy Deepak"
global.creator = "917029257330@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6288983776755"] // Premium User

//channel id
global.xchannel = {
	jid: '120363222395675670@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '92' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable Type .nsfw on',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});

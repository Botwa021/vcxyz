/**Penjelasan: Untuk menggunakan script ini, kamu akan perlu mengganti nomor owner dan wm terlebih dahulu. Kamu juga harus memiliki api key dari kedua website ini https://api.botcahx.live dan https://api.betabotz.me. Setelah memiliki api key, kamu bisa menggantinya dengan menyalin key tersebut dari profilmu dan paste di variabel global.btc. Contohnya, global.btc = 'xzRhejka'. Setelah itu, kamu bisa melanjutkan dengan mengubah nomor owner dan wm.
**/


global.owner = ['6288233832771', '628871888457']  
global.mods = ['6288233832771'] 
global.prems = ['6288233832771']
global.nameowner = 'mrsd'
global.numberowner = '6288233832771' 
global.mail = 'mursidxml@gmail.com' 
global.dana = '088233832771'
global.pulsa = '083189913217'
global.gopay = '088233832771'
global.namebot = 'мυʀѕι∂ вσт-χмℓ'
global.gc = 'https://chat.whatsapp.com/K4k4vkiENh11HMBMCZ8eox'
global.web = 'https://github.com/mursidxml'
global.instagram = 'https://instagram.com/mursid.st'
global.wm = 'мυʀѕι∂ вσт-χмℓ'
global.watermark = wm
global.wm2 = 'мυʀѕι∂ вσт-χмℓ'
global.wm3 = 'мυʀѕι∂ вσт-χмℓ'
global.wm4 = 'мυʀѕι∂ вσт-χмℓ'
global.wait = '_*Loading...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar'
global.salah = 'Salah'
global.stiker_wait = '*Loading...*'
global.packname = 'Made with'
global.author = 'мυʀѕι∂ вσт-χмℓ'
global.alpiskey = 'YOUR_APIKEY_HERE' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'CaydVnuV' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'YOUR_APIKEY_HERE' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'YOUR_APIKEY_HERE' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

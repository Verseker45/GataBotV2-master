let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!args[0]) throw `*Formato de uso: ${usedPrefix + command} https://tiktokxxxx*\n*Ejemplo:*\n*${usedPrefix + command} https://vm.tiktok.com/ZMLUWWsc3/*`
if (!args[0].match(/tiktok/gi)) throw `*Fallo al detectar la URL de tiktok, compruebe que sea de tiktok*`
let res = await fetch("https://api-alc.herokuapp.com/api/download/tiktok?url="+args[0]+"&apikey=ConfuMods")
let json = await res.json()
conn.sendFile(m.chat, json.result.sin_marca, 'error.mp4', `π€ΉββοΈ *Β‘Aqui tienes el tiktok!*\nπ πππ©π πΏππ€π¨ π`, m)}
handler.command = /^(tik(tok)?(dl)?)$/i
module.exports = handler

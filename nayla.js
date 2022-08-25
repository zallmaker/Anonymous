// BY RIMURUBOTZ 
// JANGAN DIJUAL YA BANG😁
"use strict";
const {
downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./db/function/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("./db/function/myfunc");
const fs = require ("fs");
const util = require('util')
const chalk = require('chalk');
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const setting = JSON.parse(fs.readFileSync('./admin/config.json')); 
const daftar = JSON.parse(fs.readFileSync('./db/function/daftar.json')); 
const speed = require("performance-now");
const Exif = require("./db/function/exif")
const exif = new Exif()
moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async(nayla, nay, m, setting, store, welcome) => {
try {
let { ownerNumber, kodeprem } = setting
let { allmenu } = require('./admin/help')

const { type, quotednay, mentioned, now, fromMe } = nay
if (nay.isBaileys) return
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const content = JSON.stringify(nay.message)
const from = nay.key.remoteJid
const chats = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type === 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type === 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type === 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotednay.fromMe && nay.message.buttonsResponseMessage.selectedButtonId ? nay.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotednay.fromMe && nay.message.templateButtonReplyMessage.selectedId ? nay.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (nay.message.buttonsResponseMessage?.selectedButtonId || nay.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotednay.fromMe && nay.message.listResponseMessage.singleSelectReply.selectedRowId ? nay.message.listResponseMessage.singleSelectReply.selectedRowId : ""
const toJSON = j => JSON.stringify(j, null,'\t')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const isGroup = nay.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (nay.key.participant ? nay.key.participant : nay.participant) : nay.key.remoteJid
const isOwner = ownerNumber == sender ? true : ["6282347260729@s.whatsapp.net","6283856085455@s.whatsapp.net","6285607859362@s.whatsapp.net"].includes(sender) ? true : false
const pushname = nay.pushName
const body = chats.startsWith(prefix) ? chats : ''
const budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;

const botNumber = nayla.user.id.split(':')[0] + '@s.whatsapp.net'
const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)
 
const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
function jsonformat(string) {return JSON.stringify(string, null, 2)}
function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = nayla.sendMessage(from, { text: teks, mentions: mems })
return res } else { let res = nayla.sendMessage(from, { text: teks, mentions: mems }, { quoted: nay })
return res}}
 
const reply = (teks) => {nayla.sendMessage(from, { text: teks }, { quoted: nay })}
const textImg = (teks) => {return nayla.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg) }, { quoted: nay })}
const sendMess = (hehe, teks) => {nayla.sendMessage(hehe, { text, teks })}
 
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
 
const cekUser = (satu, dua) => { 
let x1 = false
Object.keys(daftar).forEach((i) => {
if (daftar[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return daftar[x1].id } 
if (satu == "status"){ return daftar[x1].status } 
if (satu == "teman"){ return daftar[x1].teman } 
if (satu == "gender"){ return daftar[x1].gender }
} 
if (x1 == false) { return null } 
}
const setUser = (satu, dua, tiga) => { 
let x1 = false
Object.keys(daftar).forEach((i) => {
if (daftar[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "±id"){ daftar[x1].id = tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±status"){ daftar[x1].status = tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±teman"){ daftar[x1].teman = tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
if (satu == "±gender"){ daftar[x1].gender = tiga 
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))} 
} 
if (x1 == false) { return null }}

let teman = []
Object.keys(daftar).forEach((i) => {
if (daftar[i].teman == false){
if (daftar[i].id !== sender){
teman.push(daftar[i].id)
}}})
const pasangan = teman[Math.floor(Math.random() * (teman.length))]
function _0x1ffe(){var _0x4afa21=['sendMessag','OyCaF','XuUKC','videoMessa','.jpg','status@bro','636936CMkGlb','audio/mpeg','49352UrfZqT','.mp4','wppoZ','TedYb','adcast','83710qDbpns','audioMessa','video','SIqTo','2491556nViyoV','5VPtups','343CAUpaN','ptt','AyIQf','Exytw','.webp','message','4449699ZBFmAx','from','ZhatU','sticker','ync','[\x20*ANONYMO','image','US*\x20]\x20Pesa','sage','OLISB','messages','.mp3','stickerMes','zqUtg','14KTVZtx','imageMessa','MHfjg','2189jhKEmw','concat','writeFileS','UDQhn','audio','154062pSkrzq','158334OkYtJz','iMzzC','./db/media','zrodu','n\x20Diterusk'];_0x1ffe=function(){return _0x4afa21;};return _0x1ffe();}(function(_0x2dabc3,_0x59e2d2){var _0x465d7e=_0x29bb,_0x11bd8b=_0x2dabc3();while(!![]){try{var _0x384071=-parseInt(_0x465d7e(0x15d))/(0x8d*-0x43+0x1*-0x859+0x2d41)+parseInt(_0x465d7e(0x149))/(-0x481+-0x8+-0x48b*-0x1)*(-parseInt(_0x465d7e(0x152))/(-0x1*0x258b+-0x1*0x1075+0x3*0x1201))+-parseInt(_0x465d7e(0x168))/(0x1f3*0xb+-0xb5c*-0x2+-0x2c25)*(-parseInt(_0x465d7e(0x169))/(-0x195b+0x1dde+-0xa*0x73))+-parseInt(_0x465d7e(0x151))/(0x2*-0xb96+0x1a05*0x1+0xf1*-0x3)+parseInt(_0x465d7e(0x16a))/(-0x694*0x2+0x1487+0xa*-0xbc)*(-parseInt(_0x465d7e(0x15f))/(0x1742+0x1d*-0x82+0x220*-0x4))+-parseInt(_0x465d7e(0x170))/(0x1*0x258d+0x1595+-0x3b19)+-parseInt(_0x465d7e(0x164))/(0x1cc9*-0x1+-0xa94+-0x7*-0x5a1)*(-parseInt(_0x465d7e(0x14c))/(-0x1d71+0x4c1+0xd*0x1e7));if(_0x384071===_0x59e2d2)break;else _0x11bd8b['push'](_0x11bd8b['shift']());}catch(_0x37547e){_0x11bd8b['push'](_0x11bd8b['shift']());}}}(_0x1ffe,0x374da+-0x29f3e*-0x3+-0x44dd5));function _0x29bb(_0x3f4260,_0x2ee970){var _0x55286f=_0x1ffe();return _0x29bb=function(_0x104015,_0x18f294){_0x104015=_0x104015-(0x5fb+0x633+-0x136*0x9);var _0x3256a2=_0x55286f[_0x104015];return _0x3256a2;},_0x29bb(_0x3f4260,_0x2ee970);}async function Download(_0x3c74a6,_0x57a6d7,_0x29d697){var _0x445997=_0x29bb,_0xa85671={'ZhatU':function(_0x6d71ec,_0x2a6f1e){return _0x6d71ec==_0x2a6f1e;},'AyIQf':_0x445997(0x176),'zrodu':function(_0x3927f6,_0x383471,_0x568fbb){return _0x3927f6(_0x383471,_0x568fbb);},'TedYb':_0x445997(0x15c)+_0x445997(0x163),'zqUtg':_0x445997(0x175)+_0x445997(0x177)+_0x445997(0x156)+'an','Exytw':function(_0x3e2e4f,_0x43d1ff){return _0x3e2e4f==_0x43d1ff;},'XuUKC':_0x445997(0x173),'MHfjg':function(_0x1137cf,_0x534c44,_0x469713){return _0x1137cf(_0x534c44,_0x469713);},'OLISB':_0x445997(0x150),'wppoZ':function(_0x378251,_0x337b90,_0x2937ad){return _0x378251(_0x337b90,_0x2937ad);},'UDQhn':_0x445997(0x15e),'iMzzC':function(_0x486b97,_0x345222){return _0x486b97==_0x345222;},'OyCaF':_0x445997(0x166),'SIqTo':function(_0x56c24a,_0x1b961b,_0xd4b040){return _0x56c24a(_0x1b961b,_0xd4b040);}};if(_0xa85671[_0x445997(0x172)](_0x3c74a6,_0xa85671[_0x445997(0x16c)])){var _0x299e4b=await _0xa85671[_0x445997(0x155)](downloadContentFromMessage,nay[_0x445997(0x16f)][_0x445997(0x14a)+'ge'],_0xa85671[_0x445997(0x16c)]),_0x593d47=Buffer[_0x445997(0x171)]([]);for await(const _0x1c91dd of _0x299e4b){_0x593d47=Buffer[_0x445997(0x14d)]([_0x593d47,_0x1c91dd]);}fs[_0x445997(0x14e)+_0x445997(0x174)](_0x445997(0x154)+'/'+sender+_0x445997(0x15b),_0x593d47),nayla[_0x445997(0x157)+'e'](_0x57a6d7,{'image':{'url':_0x445997(0x154)+'/'+sender+_0x445997(0x15b)},'caption':_0x29d697,'mentions':[sender]},{'quoted':{'key':{'fromMe':![],'participant':''+botNumber,...from?{'remoteJid':_0xa85671[_0x445997(0x162)]}:{}},'message':{'conversation':_0xa85671[_0x445997(0x148)]}}});}if(_0xa85671[_0x445997(0x16d)](_0x3c74a6,_0xa85671[_0x445997(0x159)])){var _0x299e4b=await _0xa85671[_0x445997(0x14b)](downloadContentFromMessage,nay[_0x445997(0x16f)][_0x445997(0x17c)+_0x445997(0x178)],_0xa85671[_0x445997(0x159)]),_0x593d47=Buffer[_0x445997(0x171)]([]);for await(const _0x52037e of _0x299e4b){_0x593d47=Buffer[_0x445997(0x14d)]([_0x593d47,_0x52037e]);}fs[_0x445997(0x14e)+_0x445997(0x174)](_0x445997(0x154)+'/'+sender+_0x445997(0x16e),_0x593d47),nayla[_0x445997(0x157)+'e'](_0x57a6d7,{'sticker':{'url':_0x445997(0x154)+'/'+sender+_0x445997(0x16e)},'mentions':[sender]},{'quoted':{'key':{'fromMe':![],'participant':''+botNumber,...from?{'remoteJid':_0xa85671[_0x445997(0x162)]}:{}},'message':{'conversation':_0xa85671[_0x445997(0x148)]}}});}if(_0xa85671[_0x445997(0x16d)](_0x3c74a6,_0xa85671[_0x445997(0x179)])){var _0x299e4b=await _0xa85671[_0x445997(0x161)](downloadContentFromMessage,nay[_0x445997(0x16f)][_0x445997(0x165)+'ge'],_0xa85671[_0x445997(0x179)]),_0x593d47=Buffer[_0x445997(0x171)]([]);for await(const _0x127437 of _0x299e4b){_0x593d47=Buffer[_0x445997(0x14d)]([_0x593d47,_0x127437]);}fs[_0x445997(0x14e)+_0x445997(0x174)](_0x445997(0x154)+'/'+sender+_0x445997(0x17b),_0x593d47),nayla[_0x445997(0x157)+'e'](_0x57a6d7,{'audio':{'url':_0x445997(0x154)+'/'+sender+_0x445997(0x17b)},'mimetype':_0xa85671[_0x445997(0x14f)],'ptt':m[_0x445997(0x17a)][0x2327+-0x162*0x3+-0x1f01][_0x445997(0x16f)][_0x445997(0x165)+'ge'][_0x445997(0x16b)],'mentions':[sender]},{'quoted':{'key':{'fromMe':![],'participant':''+botNumber,...from?{'remoteJid':_0xa85671[_0x445997(0x162)]}:{}},'message':{'conversation':_0xa85671[_0x445997(0x148)]}}});}if(_0xa85671[_0x445997(0x153)](_0x3c74a6,_0xa85671[_0x445997(0x158)])){var _0x299e4b=await _0xa85671[_0x445997(0x167)](downloadContentFromMessage,nay[_0x445997(0x16f)][_0x445997(0x15a)+'ge'],_0xa85671[_0x445997(0x158)]),_0x593d47=Buffer[_0x445997(0x171)]([]);for await(const _0x20ed20 of _0x299e4b){_0x593d47=Buffer[_0x445997(0x14d)]([_0x593d47,_0x20ed20]);}fs[_0x445997(0x14e)+_0x445997(0x174)](_0x445997(0x154)+'/'+sender+_0x445997(0x160),_0x593d47),nayla[_0x445997(0x157)+'e'](_0x57a6d7,{'video':{'url':_0x445997(0x154)+'/'+sender+_0x445997(0x160)},'caption':_0x29d697,'mentions':[sender]},{'quoted':{'key':{'fromMe':![],'participant':''+botNumber,...from?{'remoteJid':_0xa85671[_0x445997(0x162)]}:{}},'message':{'conversation':_0xa85671[_0x445997(0x148)]}}});}}
if (isCmd && !fromMe) {console.log("[" + chalk.green(" CMD ") + "]" + chalk.yellow("=") + "[ " + chalk.green(`${pushname}`) + " ]" + chalk.yellow("=") + "[ " + chalk.green(`${command}`) + " ]" + chalk.yellow("=") + "[ " + chalk.green(`${jam}`) + " ]"  )} 
 
switch(command) { 
case 'star': case 'start': case 'menu': case 'help':
if (isGroup) return reply("Gunakan bot ini di pesan pribadi:3")
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
let [x3] = ownerNumber
const sections = [
{ title: "ONLY FREE", rows: [ 
{title: "Teman", rowId: prefix + "teman", description: "Mencari Teman Random"},
{title: "Delete", rowId: prefix + "delete", description: "Hapus Teman kamu"},
{title: "Skip", rowId: prefix + "skip", description: "Mencari Teman Baru"},
{title: "Teman", rowId: prefix + "teman", description: "Mencari Teman Random"}
]},
{ title: "ONLY PREMIUM", rows: [ 
{title: "Getprem", rowId: prefix + "getprem", description: "Dapatkan premium"},
{title: "Cekteman", rowId: prefix + "cekteman", description: "Cek identitas teman"}
]}]
const listMessage = {
text: `Dibuat Dengan 💖 Oleh @${x3.split("@")[0]}`,
footer: "Tutorial/Cara menggunakan bot anonymous-chat: https://md-devs.herokuapp.com/anonymous\n\n[ THX TO ]\n• RIMURUBOTZ\n• LOLIKILLERS\n• LORD.R1YNZ",
title: "[ *ANONYMOUS V1* ]",
buttonText: "LIST-COMMAND",
mentions: ownerNumber,
sections}
nayla.sendMessage(from, listMessage)
break

case 'daftar':
if (isGroup) return reply("Gunakan bot ini di pesan pribadi:3")
if (cekUser("id", sender) !== null) return reply("Kamu sudah terdaftar sebelum nya:3 Gunakan command #menu untuk mengetahui apa saja fungsi bot ini")
if (!args[0]) return nayla.sendMessage(from, { text: "[ *DAFTAR* ]\n\nMasukkan Gender", footer: 'Loading...', buttons: [{buttonId: `${prefix + command} x`, buttonText: {displayText: '[👦] Pria'}, type: 1}, {buttonId: `${prefix + command} y`, buttonText: {displayText: '[👧] Wanita'}, type: 1}],headerType: 1 })
if (args[0] == "x") {
daftar.push({id: sender, teman:false, gender: "pria", status:false})
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))
reply(`[ *YOUR-INFO* ]\n• *Status* : Sukses\n• *Id* : ${sender.split("@")[0]}\n• *User* : Free\n• *Gender* : Pria\n• *Teman* : false\n\n*Note* : Silahkan gunakan fitur menu untuk melihat apa saya fungsi bot ini:3`)}
if (args[0] == "y") {
daftar.push({id: sender, teman:false, gender: "wanita", status:false})
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))
reply(`[ *YOUR-INFO* ]\n• *Status* : Sukses\n• *Id* : ${sender.split("@")[0]}\n• *User* : Free\n• *Gender* : Wanita\n• *Teman* : false\n\n*Note* : Silahkan gunakan fitur menu untuk melihat apa saya fungsi bot ini:3`)}
break

case 'teman': case 'temen': case 'cariteman': case 'caritemen':
if (isGroup) return reply("Gunakan bot ini di pesan pribadi:3")
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (cekUser("teman", sender) !== false) return reply("Anda telah memiliki teman sebelumnya, Ingin mengganti teman? gunakan command *#skip* atau ingin menghapus teman? gunakan command *#delete*")
if (teman == "") return reply("Pasangan kamu tidak tersedia, Silahkan suruh orang lain untuk mendaftar ke bot, agar bisa menjadi pasangan untuk anda:)")
reply("Sedang mencarikan anda pasangan.. Silahkan tunggu 10 detik")
setTimeout( () => {
reply("Sukses Menemukan pasangan, Coba katakan halo:3\n\n*Note* : Jika teman kamu tidak merespon mungkin dia sedang offline, Ingin mengganti teman? gunakan command *#skip* atau ingin menghapus teman? gunakan command *#delete*")
setUser("±teman", sender, pasangan)
setUser("±teman", pasangan, sender)
nayla.sendMessage(pasangan,{ text : "Seseorang sedang berteman dengan ada, Coba katakan halo "})
}, 10000)
break
 
case 'delete': case 'deleteteman': case 'deletetemen': case 'hapus': case 'hapusteman': case 'hapustemen':
if (isGroup) return reply("Gunakan bot ini di pesan pribadi:3")
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (cekUser("teman", sender) == false) return reply("Kamu belum memiliki teman:3")
reply("Sukses Menghapus teman:3")
nayla.sendMessage(cekUser("teman", sender) ,{ text : "Teman kamu telah memutuskan hubungan dengan anda:( "})
setUser("±teman", cekUser("teman", sender), false)
setUser("±teman", sender, false)
break

case 'skip': 
if (isGroup) return reply("Gunakan bot ini di pesan pribadi:3")
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (cekUser("teman", sender) == false) return reply("Kamu belum memiliki teman:3")
if (teman == "") return reply("Pasangan kamu tidak tersedia, Silahkan suruh orang lain untuk mendaftar ke bot, agar bisa menjadi pasangan untuk anda:)")
reply("Sukses Menghapus teman:3, Sedang mencari teman baru, tunggu 10 detik:3")
nayla.sendMessage(cekUser("teman", sender) ,{ text : "Teman kamu telah memutuskan hubungan dengan anda:( "})
setUser("±teman", cekUser("teman", sender), false)
setUser("±teman", sender, false)
setTimeout( () => {
reply("Sukses Menemukan pasangan, Coba katakan halo:3\n\n*Note* : Jika teman kamu tidak merespon mungkin dia sedang offline, Ingin mengganti teman? gunakan command *#skip* atau ingin menghapus teman? gunakan command *#delete*")
setUser("±teman", sender, pasangan)
setUser("±teman", pasangan, sender)
nayla.sendMessage(pasangan,{ text : "Seseorang sedang berteman dengan ada, Coba katakan halo "})
}, 10000)
break

case 'cekteman': case 'cektemen':
if (isGroup) return reply("Gunakan bot ini di pesan pribadi:3")
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (cekUser("teman", sender) == false) return reply("Kamu belum memiliki teman:3")
if (cekUser("status", sender) == false) return reply("Fitur ini Khusus premium, Ingin mendapatkan premium? silahkan gunakan fitur #getprem")
reply(`[ *INFOTEMAN* ]
• *No* : ${cekUser("teman", sender).split("@")[0]}
• *Gender* : ${cekUser("gender", cekUser("teman", sender))}`)
break

case 'getprem':
if (cekUser("id", sender) == null) return reply("Kamu belum terdaftar di database bot, Silahkan daftar terlebih dahulu, gunakan command #daftar")
if (isGroup) return reply("Gunakan bot ini di pesan pribadi:3")
if (!args[0]) return reply("Masukkan kodeprem, Tidak punya? minta ke owner:3")
if (args[0] == kodeprem) {
setUser("±status", sender, true)
reply("Sukses, Sekarang anda adalah user premium:3")
} else { reply("Kode prem salah:(")}
break

case 'owner':
if (isGroup) return reply("Gunakan bot ini di pesan pribadi:3")
let [x2] = ownerNumber
reply("https://wa.me/" + x2.split("@")[0])
break
default:

if (!isGroup && !isCmd) {
if (cekUser("id", sender) == null) return
if (cekUser("teman", sender) == false) return
const reactionMessage = { react: { text: "✉", key: nay.key}}
nayla.sendMessage(from, reactionMessage)
if (m.messages[0].type == "conversation" || m.messages[0].type == "extendedTextMessage") {
try{ var text1 = m.messages[0].message.extendedTextMessage.text } catch (err) { var text1 = m.messages[0].message.conversation } 
nayla.sendMessage(cekUser("teman", sender), {text:text1}, {quoted:{ key: {fromMe: false, participant: `${botNumber}`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"conversation": "[ *ANONYMOUS* ] Pesan Diteruskan"}} }) 
}
if (m.messages[0].type == "imageMessage") { 
Download("image", cekUser("teman", sender), m.messages[0].message.imageMessage.caption)
}
if (m.messages[0].type == "stickerMessage") { 
Download("sticker", cekUser("teman", sender))
}
if (m.messages[0].type == "audioMessage") { 
Download("audio", cekUser("teman", sender))
}
if (m.messages[0].type == "videoMessage") { 
Download("video", cekUser("teman", sender), m.messages[0].message.videoMessage.caption)}}
if (budy == prefix + "sc"){reply("https://za.uy/4JGWB")} // JANGAN DI UBAH:(
}} catch (err) {
console.log(color('[ERROR]', 'red'), err)}}

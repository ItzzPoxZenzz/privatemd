exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return`Halo!! ${pushname} Kamu belum daftar.\nKetik .daftar dulu`
	}
exports.regis = () =>{
	return`Anda sudah terdaftar!!`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return`Only Owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`Only Admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`Features can only be used in grub`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`Welcome kak >.<`
      }
exports.leave = () =>{
	return`
Sayonara~ :')`
}
exports.menu = (prefix, salam, pushname) =>{
	return`❏「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❏

╾ _Name Bot : Multi bot_
╾ _Name Owner : Multi Device_
╾ _Contact Owner : wa.me/6285387059588_
╾ _Reggion Owner : Indonesian_


╔══❒𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐❒═╗
╠❐ ${prefix}sider [reply pesan bot]
╠❐ ${prefix}listonline
╠❐ ${prefix}delete [reply pesan bot]
╠❐ ${prefix}antilink 1 / 0
╠❐ ${prefix}hidetag [text]
╠❐ ${prefix}linkgrup
╠❐ ${prefix}tagall
╠❐ ${prefix}kick @tag
╠❐ ${prefix}setdesc [text] 
╠❐ ${prefix}setname [text] 
╚═══════════════╝

╔══❒𝙎𝙀𝘼𝙍𝘾𝙃 𝙈𝙀𝙉𝙐❒═╗
╠❐ ${prefix}play [query]
╠❐ ${prefix}song [judul lagu]
╠❐ ${prefix}pinterest [query]
╠❐ ${prefix}ytmp3 [url]
╠❐ ${prefix}ytmp4 [url]
╠❐ ${prefix}tiktok [url]
╠❐ ${prefix}tiktoknowm [url]
╠❐ ${prefix}tiktokwm [url]
╠❐ ${prefix}tiktokaudio [url]
╠❐ ${prefix}soundcloud [url]
╠❐ ${prefix}telesticker [url]
╠❐ ${prefix}spotify [url]
╠❐ ${prefix}spotifysearch [query]
╠❐ ${prefix}nhentai [code]
╠❐ ${prefix}nhentaipdf [code]
╠❐ ${prefix}nhentaisearch [query]
╚═══════════════╝

╔══❒𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐❒═╗
╠❐ ${prefix}nami 
╠❐ ${prefix}copper 
╠❐ ${prefix}naruto  
╠❐ ${prefix}zoro 
╠❐ ${prefix}ussop 
╠❐ ${prefix}minato 
╠❐ ${prefix}sasuke 
╠❐ ${prefix}sakura
╠❐ ${prefix}luffy 
╠❐ ${prefix}sanji  
╠❐ ${prefix}boruto 
╠❐ ${prefix}sarada 
╠❐ ${prefix}mitsuki 
╠❐ ${prefix}orochimaru 
╠❐ ${prefix}tsunade 
╠❐ ${prefix}kakashi 
╠❐ ${prefix}killua 
╠❐ ${prefix}gon 
╠❐ ${prefix}rimuru 
╠❐ ${prefix}sagiri 
╠❐ ${prefix}natsu 
╠❐ ${prefix}tanjirou 
╠❐ ${prefix}nezuko 
╠❐ ${prefix}senku
╠❐ ${prefix}wetglass
╠❐ ${prefix}multicolor3d
╠❐ ${prefix}watercolor
╠❐ ${prefix}luxurygold
╠❐ ${prefix}galaxywallpaper
╠❐ ${prefix}lighttext
╠❐ ${prefix}beautifulflower
╠❐ ${prefix}puppycute
╠❐ ${prefix}royaltext
╠❐ ${prefix}heartshaped
╠❐ ${prefix}birthdaycake
╠❐ ${prefix}galaxystyle
╠❐ ${prefix}hologram3d
╠❐ ${prefix}greenneon
╠❐ ${prefix}glossychrome
╠❐ ${prefix}greenbush
╠❐ ${prefix}metallogo
╠❐ ${prefix}noeltext
╠❐ ${prefix}glittergold
╠❐ ${prefix}textcake
╠❐ ${prefix}starsnight
╠❐ ${prefix}wooden3d
╠❐ ${prefix}textbyname
╠❐ ${prefix}writegalacy
╠❐ ${prefix}galaxybat
╠❐ ${prefix}snow3d
╠❐ ${prefix}birthdayday
╠❐ ${prefix}goldplaybutton
╠❐ ${prefix}silverplaybutton
╠❐ ${prefix}freefire
╠❐ ${prefix}blackpink
╠❐ ${prefix}neon
╠❐ ${prefix}greenneon
╠❐ ${prefix}advanceglow
╠❐ ${prefix}futureneon
╠❐ ${prefix}sandwriting
╠❐ ${prefix}sandsummer
╠❐ ${prefix}sandengraved
╠❐ ${prefix}metaldark
╠❐ ${prefix}neonlight
╠❐ ${prefix}holographic
╠❐ ${prefix}text1917
╠❐ ${prefix}minion
╠❐ ${prefix}deluxesilver
╠❐ ${prefix}newyearcard
╠❐ ${prefix}bloodfrosted
╠❐ ${prefix}halloween
╠❐ ${prefix}jokerlogo
╠❐ ${prefix}fireworksparkle
╠❐ ${prefix}natureleaves
╠❐ ${prefix}bokeh
╠❐ ${prefix}toxic
╠❐ ${prefix}strawberry
╠❐ ${prefix}box3d
╠❐ ${prefix}roadwarning
╠❐ ${prefix}breakwall
╠❐ ${prefix}icecold
╠❐ ${prefix}luxury
╠❐ ${prefix}cloud
╠❐ ${prefix}summersand
╠❐ ${prefix}horrorblood
╠❐ ${prefix}thunder
╠❐ ${prefix}character [anime]
╠❐ ${prefix}anime [query]
╠❐ ${prefix}manga [query]
╠❐ ${prefix}kusonime [query]
╠❐ ${prefix}kusonimesearch [query]
╠❐ ${prefix}otakudesu [query]
╠❐ ${prefix}otakudesusearch [query] 
╠❐ ${prefix}pantun 
╠❐ ${prefix}puisi 
╠❐ ${prefix}bucinquote 
╠❐ ${prefix}dilanquote 
╠❐ ${prefix}katasenja 
╠❐ ${prefix}motivasi
╠❐ ${prefix}randomquote
╠❐ ${prefix}quotemuslim
╠❐ ${prefix}quotesgalau
╠❐ ${prefix}creepyfact
╠❐ ${prefix}cerpen
╠❐ ${prefix}cersex
╠❐ ${prefix}cersex2
╠❐ ${prefix}huluh [text]
╠❐ ${prefix}hilih [text]
╠❐ ${prefix}heleh [text]
╠❐ ${prefix}halah [text]
╠❐ ${prefix}reversetext [text]
╠❐ ${prefix}cercreepy
╠❐ ${prefix}faktaunik
╠❐ ${prefix}quotetrump
╠❐ ${prefix}animequote
╠❐ ${prefix}animequote2
╠❐ ${prefix}trumpthink
╚═══════════════╝

╔══❒𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐❒═╗
╠❐ ${prefix}tebakgambar 
╠❐ ${prefix}nuliskiri [text]
╠❐ ${prefix}nuliskanan [text]
╠❐ ${prefix}foliokiri [text]
╠❐ ${prefix}foliokanan [text]
╠❐ ${prefix}stiker [video/image]
╠❐ ${prefix}semoji 😎
╠❐ ${prefix}smeme [text]
╠❐ ${prefix}memegen [text|text2]
╠❐ ${prefix}fast [video/vn]
╠❐ ${prefix}tupai [video/vn]
╠❐ ${prefix}vibra [video/vn]
╠❐ ${prefix}robot [video/vn]
╠❐ ${prefix}slow [video/vn]
╠❐ ${prefix}bass [video/vn]
╠❐ ${prefix}nightcore [video/vn]
╚═══════════════╝

╔══❒𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐❒═╗
╠❐ ${prefix}broadcast [text]
╠❐ ${prefix}leave
╠❐ ${prefix}antidelete [on/off]
╠❐ ${prefix}anticall [on/off]
╚═══════════════╝
`
	}
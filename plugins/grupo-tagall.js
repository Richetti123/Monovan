const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
let oi = `*🌟𝘽𝙮:𝙈𝙞𝙘𝙝𝙞𝘽𝙤𝙩* ${pesan}`
let teks = `*😾𝙀𝙡 𝙢𝙚𝙟𝙤𝙧 𝙗𝙤𝙩 𝙩𝙚 𝙞𝙣𝙫𝙤𝙘𝙖 𝙥𝙡𝙖𝙣𝙩𝙖😸*\n\n${oi}\n*🌟@𝖈𝖊𝖔𝖌𝖊𝖗𝖎𝖕𝖎𝖚𝖒.𝖉𝖟𝖓*\n`
for (let mem of participants) {
teks += `ʚ❤‍🔥ɞ @${mem.id.split('@')[0]}\n`}
teks += `MichiBot`
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;

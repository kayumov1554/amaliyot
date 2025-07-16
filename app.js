const { Telegraf } = require('telegraf');
const dictionary = require('./dictionary'); // lug'at alohida faylda

const bot = new Telegraf('7512880109:AAFXlYoxQU3xPrt60w4vJCY4LzCLqhu5nRY');

bot.start((ctx) => {
  ctx.reply("Assalomu alaykum! 👋\nMenga O‘zbekcha yoki Koreyscha so‘z yuboring.\nMen sizga tarjimasini aytaman 🇺🇿 ↔️ 🇰🇷");
});
// Matn yuborilganda ishlaydi
bot.on('text', (ctx) => {
  const input = ctx.message.text.trim().toLowerCase();

  const match = dictionary.find(item =>
    item.uz.toLowerCase() === input || item.ko === input
  );

  if (match) {
    ctx.reply(`🇺🇿 ${match.uz}\n🇰🇷 ${match.ko} (${match.roman})`);
  } else {
    ctx.reply("Kechirasiz, bu so‘z uchun tarjima topilmadi.");
  }
});

bot.launch();
console.log("Bot ishga tushdi...");

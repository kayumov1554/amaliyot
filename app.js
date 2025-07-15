const { Telegraf } = require('telegraf');
const dictionary = require('./dictionary'); // lug'at alohida faylda

const bot = new Telegraf('7512880109:AAFXlYoxQU3xPrt60w4vJCY4LzCLqhu5nRY');

// Matn yuborilganda ishlaydi
bot.on('text', (ctx) => {
  const input = ctx.message.text.trim().toLowerCase();

  const match = dictionary.find(item =>
    item.uz.toLowerCase() === input || item.ko === input
  );

  if (text === '/start') return

  if (match) {
    ctx.reply(`🇺🇿 ${match.uz}\n🇰🇷 ${match.ko} (${match.roman})`);
  } else {
    ctx.reply("Kechirasiz, bu so‘z uchun tarjima topilmadi.");
  }
});

bot.launch();
console.log("Bot ishga tushdi...");

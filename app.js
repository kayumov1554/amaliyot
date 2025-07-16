const { Telegraf } = require('telegraf');
const express = require('express');
const dictionary = require('./dictionary');
const alphabet = require('./alphabet');

const bot = new Telegraf('7512880109:AAFXlYoxQU3xPrt60w4vJCY4LzCLqhu5nRY'); // <-- Bot tokeningizni yozing
const app = express();
const PORT = 3000;

// Telegram bot start komandasi
bot.start((ctx) => {
  ctx.reply("👋 Assalomu alaykum!\nMenga O‘zbekcha yoki Koreyscha so‘z yuboring.\nMen sizga tarjima va izohini chiqaraman.");
});

// Matn kelganda
bot.on('text', (ctx) => {
  const input = ctx.message.text.trim().toLowerCase();

  const match = dictionary.find(item =>
    item.uz.toLowerCase() === input || item.ko === input
  );

  function findAlphabetInfo(input) {
  const match = alphabet.find(item =>
    item.uz.toLowerCase() === input.toLowerCase() || item.ko === input);

  if (match) {
    const response = `🇺🇿 ${match.uz}\n🇰🇷 ${match.ko} (${match.roman})\nℹ️ ${match.expl}`;
    ctx.reply(response);
  } else {
    ctx.reply("❌ Kechirasiz, bu so‘z uchun tarjima topilmadi.");
  }
});




  if (match) {
    return `🇰🇷 ${match.ko}\n🇺🇿 ${match.uz} (${match.roman})\nℹ️ ${match.expl}`;
  } else {
    return "❌ Bu harf topilmadi.";
  }
}

// Telegram botni ishga tushurish
bot.launch();
console.log('✅ Telegram bot ishga tushdi.');

// Express serverni ishga tushurish
app.get('/', (req, res) => {
  res.send('🤖 Bot ishlayapti. Telegram orqali yozing.');
});

app.listen(PORT, () => {
  console.log(`✅ Express server http://localhost:${PORT} da ishlayapti`);
});

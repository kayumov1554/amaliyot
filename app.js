const { Telegraf } = require('telegraf');
const express = require('express');
const dictionary = require('./dictionary');
const alphabet = require('./alphabet');

const bot = new Telegraf('7512880109:AAFXlYoxQU3xPrt60w4vJCY4LzCLqhu5nRY'); // ⚠️ Tokeningizni bu yerga yozing
const app = express();
const PORT = 3000;

// /start komandasi
bot.start((ctx) => {
  ctx.reply("👋 Assalomu alaykum!\nMenga O‘zbekcha yoki Koreyscha so‘z yoki harf yuboring.\nMen sizga tarjima va izohini chiqaraman.");
});

// Matn kelganda — so‘z yoki harf qidirish
bot.on('text', (ctx) => {
  const input = ctx.message.text.trim().toLowerCase();

  // Avval so‘z (dictionary) dan qidiramiz
  const matchWord = dictionary.find(item =>
    item.uz.toLowerCase() === input || item.ko === input
  );

  if (matchWord) {
    const response = `🇺🇿 ${matchWord.uz}\n🇰🇷 ${matchWord.ko} (${matchWord.roman})\nℹ️ ${matchWord.expl}`;
    ctx.reply(response);
    return;
  }

  // Agar so‘z topilmasa — harflar (alphabet) dan qidiramiz
  const matchHarf = alphabet.find(item =>
    item.uz.toLowerCase() === input || item.ko === input
  );

  if (matchHarf) {
    const response = `🇰🇷 ${matchHarf.ko}\n🇺🇿 ${matchHarf.uz} (${matchHarf.roman})\nℹ️ ${matchHarf.expl}`;
    ctx.reply(response);
  } else {
    ctx.reply("❌ Kechirasiz, bu so‘z yoki harf topilmadi.");
  }
});

// Telegram botni ishga tushurish
bot.launch();
console.log('✅ Telegram bot ishga tushdi.');

// Express server
app.get('/', (req, res) => {
  res.send('🤖 Bot ishlayapti. Telegram orqali yozing.');
});

app.listen(PORT, () => {
  console.log(`✅ Express server http://localhost:${PORT} da ishlayapti`);
});

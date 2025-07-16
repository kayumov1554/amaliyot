const { Telegraf } = require('telegraf');
const translate = require('@vitalets/google-translate-api');
const dictionary = require('./dictionary');

const bot = new Telegraf('7512880109:AAFXlYoxQU3xPrt60w4vJCY4LzCLqhu5nRY');

// START komandasi
bot.start((ctx) => {
  ctx.reply("👋 Assalomu alaykum!\nMenga O‘zbekcha yoki Koreyscha so‘z yuboring, men tarjimasini qaytaraman 🇺🇿 ↔️ 🇰🇷");
});

// MATN yuborilganda
bot.on('text', async (ctx) => {
  const input = ctx.message.text.trim().toLowerCase();

  // 1. Dictionarydan qidirish
  const match = dictionary.find(item =>
    item.uz.toLowerCase() === input || item.ko === input
  );

  if (match) {
    let explanation = match.expl || "ℹ️ Izoh mavjud emas.";
    ctx.reply(`🇺🇿 ${match.uz}\n🇰🇷 ${match.ko} (${match.roman})\n${explanation}`);
  } else {
    // 2. Agar topilmasa — Google Translate orqali tarjima
    try {
      const res = await translate(input, { from: 'uz', to: 'ko' });

      ctx.reply(`🇺🇿 ${input}\n🇰🇷 ${res.text} (Google tarjima)`);
    } catch (err) {
      console.error(err);
      ctx.reply("❌ Xatolik yuz berdi. Keyinroq urinib ko‘ring.");
    }
  }
});

bot.launch();
console.log("✅ Bot ishga tushdi...");

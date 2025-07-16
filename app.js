const { Telegraf } = require('telegraf');
const translate = require('@vitalets/google-translate-api').default;
const dictionary = require('./dictionary');

const bot = new Telegraf('7512880109:AAFXlYoxQU3xPrt60w4vJCY4LzCLqhu5nRY'); // ← Tokeningizni bu yerga qo‘ying

bot.start((ctx) => {
  ctx.reply("👋 Assalomu alaykum!\nMenga O‘zbekcha yoki Koreyscha so‘z yuboring.\nMen sizga tarjimasini qaytaraman 🇺🇿 ↔️ 🇰🇷");
});

bot.on('text', async (ctx) => {
  const input = ctx.message.text.trim().toLowerCase();

  const match = dictionary.find(item =>
    item.uz.toLowerCase() === input || item.ko === input
  );

  if (match) {
    const explanation = match.expl || "ℹ️ Izoh mavjud emas.";
    ctx.reply(`🇺🇿 ${match.uz}\n🇰🇷 ${match.ko} (${match.roman})\n${explanation}`);
  } else {
    try {
      const res = await translate(input, { from: 'uz', to: 'ko' });
      ctx.reply(`🇺🇿 ${input}\n🇰🇷 ${res.text} (Google tarjima)`);
    } catch (err) {
      console.error("❌ Google Translate xatosi:", err.message);
      ctx.reply("❗ Google tarjima ishlashda xatolik yuz berdi.");
    }
  }
});

bot.launch();
console.log("✅ Bot ishga tushdi...");

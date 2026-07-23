const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.BOT_TOKEN;
const OWNER_ID = process.env.OWNER_ID;
const bot = new TelegramBot(TOKEN, { polling: true });

let isAway = true;
let awayMessage = "Господин Рейко сейчас спит или занят чем-то важным. Он обязательно напишет, подождите.";

const lastReplyTime = {};
const THIRTY_MIN = 30 * 60 * 1000;

function isOwner(msg) {
  return String(msg.from.id) === String(OWNER_ID);
}

bot.onText(/\/online/, (msg) => {
  if (!isOwner(msg)) return;
  isAway = false;
  bot.sendMessage(msg.chat.id, "✅ Режим 'на связи' включён. Авто-ответ выключен.");
});

bot.onText(/\/offline/, (msg) => {
  if (!isOwner(msg)) return;
  isAway = true;
  bot.sendMessage(msg.chat.id, "🌙 Режим 'офлайн' включён. Авто-ответ работает.");
});

bot.onText(/\/setmessage (.+)/, (msg, match) => {
  if (!isOwner(msg)) return;
  awayMessage = match[1];
  bot.sendMessage(msg.chat.id, `Текст авто-ответа обновлён:\n\n${awayMessage}`);
});

bot.onText(/\/status/, (msg) => {
  if (!isOwner(msg)) return;
  bot.sendMessage(msg.chat.id, `Статус: ${isAway ? "🌙 офлайн (авто-ответ включён)" : "✅ на связи"}\nТекст: ${awayMessage}`);
});

bot.onText(/зио котча/i, async (msg) => {
  const chatId = msg.chat.id;

  const heart =
"```\n" +
"  🍑🍑    🍑🍑  \n" +
"🍑🍑🍑🍑🍑🍑🍑🍑\n" +
"🍑🍑🍑🍑🍑🍑🍑🍑\n" +
"  🍑🍑🍑🍑🍑🍑  \n" +
"    🍑🍑🍑🍑    \n" +
"      🍑🍑      \n" +
"\nЗИО КОТЧА ❤️\n" +
"```";

  const frames = ["🍑", "🍑🍑", "🍑🍑🍑", heart];

  const sent = await bot.sendMessage(chatId, frames[0]);

  for (let i = 1; i < frames.length; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      await bot.editMessageText(frames[i], {
        chat_id: chatId,
        message_id: sent.message_id,
        parse_mode: "Markdown"
      });
    } catch (e) {}
  }
});

bot.onText(/fuck you/i, async (msg) => {
  const chatId = msg.chat.id;

  const frames = [
    "🖕",
    "🖕🖕",
    "🖕🖕🖕",
    "🖕 FUCK YOU 🖕",
    "🖕🖕 FUCK YOU 🖕🖕",
    "```\n🖕 FUCK YOU 🖕\n🖕 FUCK YOU 🖕\n🖕 FUCK YOU 🖕\n```"
  ];

  const sent = await bot.sendMessage(chatId, frames[0]);

  for (let i = 1; i < frames.length; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      await bot.editMessageText(frames[i], {
        chat_id: chatId,
        message_id: sent.message_id,
        parse_mode: "Markdown"
      });
    } catch (e) {}
  }
});

bot.onText(/любовь/i, async (msg) => {
  const chatId = msg.chat.id;

  const art = [
"⠄⠄⠄⠄⠄⠠⠐⠒⠒⢶⣦⣤⡀⠄⠄⠄⠄⢀⣤⣴⣶⣶⣶⣦⣤⡀",
"⠄⠄⣠⣤⣤⠄⠄⣠⣤⣼⣿⣿⣿⡷⠄⠠⠾⠿⠿⠿⣿⡿⠛⠛⠛⠛⠓",
"⠄⣼⣿⣿⣿⠄⠄⣿⣿⣿⣿⣿⣿⣷⣶⣦⡀⠄⢶⣶⣿⣷⣶⠆⠄⣴⣶⣾⣦",
"⢸⣿⣿⣿⣿⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠈⢿⣿⣿⠏⠄⣼⣿⣿⣿⣿⡇",
"⢸⣿⣿⣿⣿⠄⠄⣿⣿⣿⡿⠛⠉⠁⠄⠄⠈⠁⠄⠈⢿⡏⠄⣼⣿⣿⣿⣿⣿⡇",
"⢸⣿⣿⣿⣿⠄⠄⣿⣿⠋⠄⢠⣶⡿⢿⣿⣷⣄⠄⠄⠈⠄⠘⢋⣉⣙⠛⠿⣿⡇",
"⠈⢿⣿⣿⣿⠄⠄⣿⠇⠄⢠⣿⣿⠄⢸⣿⣿⣿⣧⠄⠄⠄⠚⠛⠛⠛⠃⠄⡻⠁",
"⠄⠈⢿⣿⣿⠄⠄⣿⠄⠄⣾⣿⣿⠄⢸⣿⣿⣿⣿⠄⠄⠘⢿⣿⣿⣿⠟⠉⠁",
"⠄⠄⠄⠻⠟⠄⠄⠛⠄⠄⠛⠛⠋⠄⢸⣿⣿⣿⣿⠄⠄⢰⣤⣤⣭⣤",
"⠄⠄⠄⠄⠄⠠⣤⣤⠄⠄⢤⣤⣤⣤⣾⣿⣿⣿⡿⠄⠄⣿⣿⡿⠋",
"⠄⠄⠄⠄⠄⠄⠈⠛⢇⠄⠈⢿⣿⣿⣿⣿⣿⡿⠁⠄⣰⠿⠋",
"⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⠛⠛⠛⠋⠄⢀⠔⠁",
"⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠐⢤⣤⣤⣶⠞⠁",
"⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⠟⠁"
  ];

  const frames = [];
  for (let i = 1; i <= art.length; i++) {
    const partial = art.slice(0, i).join("\n");
    frames.push("```\n" + partial + "\n```");
  }
  frames.push("```\n" + art.join("\n") + "\n\nЛЮБОВЬ ❤️\n```");

  const sent = await bot.sendMessage(chatId, frames[0], { parse_mode: "Markdown" });

  for (let i = 1; i < frames.length; i++) {
    await new Promise(r => setTimeout(r, 350));
    try {
      await bot.editMessageText(frames[i], {
        chat_id: chatId,
        message_id: sent.message_id,
        parse_mode: "Markdown"
      });
    } catch (e) {}
  }
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || "";

  if (text.startsWith('/') || isOwner(msg)) return;
  if (!isAway) return;

  const now = Date.now();
  const last = lastReplyTime[chatId] || 0;
  if (now - last < THIRTY_MIN) return;

  bot.sendMessage(chatId, awayMessage);
  lastReplyTime[chatId] = now;
});

console.log('Бот запущен');

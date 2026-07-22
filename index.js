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


const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

let isAway = true;
const awayMessage = "Господин Рейко сейчас спит или занят чем-то важным. Он обязательно напишет, подождите.";

const lastReplyTime = {};

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (!isAway) return;

  const now = Date.now();
  const last = lastReplyTime[chatId] || 0;
  const THIRTY_MIN = 30 * 60 * 1000;

  if (now - last < THIRTY_MIN) return;

  bot.sendMessage(chatId, awayMessage);
  lastReplyTime[chatId] = now;
});

console.log('Бот запущен');

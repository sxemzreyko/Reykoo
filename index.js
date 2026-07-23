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
    frames.push("```\n" + art.slice(0, i).join("\n") + "\n```");
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

bot.onText(/спокойной ночи/i, async (msg) => {
  const chatId = msg.chat.id;

  const art = [
"        ⭐",
"    ⭐       ⭐",
"       🌙",
"  ⭐    🌙🌙   ⭐",
"      🌙🌙🌙",
"⭐   🌙🌙🌙🌙   ⭐",
"      🌙🌙🌙",
"       🌙",
"    ⭐       ⭐",
"        ⭐"
  ];

  const frames = [];
  for (let i = 1; i <= art.length; i++) {
    frames.push("```\n" + art.slice(0, i).join("\n") + "\n```");
  }
  frames.push("```\n" + art.join("\n") + "\n\nСПОКОЙНОЙ НОЧИ 🌙✨\n```");

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

bot.onText(/\/game/, (msg) => {
  bot.sendMessage(msg.chat.id, "Выбери:", {
    reply_markup: {
      inline_keyboard: [[
        { text: "🪨 Камень", callback_data: "rock" },
        { text: "✂️ Ножницы", callback_data: "scissors" },
        { text: "📄 Бумага", callback_data: "paper" }
      ]]
    }
  });
});

  

const compliments = [
  "Ты сегодня особенно классно выглядишь! ✨",
  "У тебя отличное чувство юмора! 😄",
  "Ты явно умнее большинства людей в этом чате 🧠",
  "С тобой приятно общаться! 💬",
  "Ты сегодня в отличной форме! 💪"
];bot.on('callback_query', async (query) => {
  const choices = ["rock", "scissors", "paper"];
  const names = { rock: "🪨 Камень", scissors: "✂️ Ножницы", paper: "📄 Бумага" };
  const userChoice = query.data;
  const botChoice = choices[Math.floor(Math.random() * 3)];

  let result;
  if (userChoice === botChoice) {
    result = "Ничья! 🤝";
  } else if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "scissors" && botChoice === "paper") ||
    (userChoice === "paper" && botChoice === "rock")
  ) {
    result = "Ты выиграл! 🎉";
  } else {
    result = "Бот выиграл! 🤖";
  }

  bot.answerCallbackQuery(query.id);

  const chatId = query.message.chat.id;

  const sent = await bot.sendMessage(chatId, "Камень...");
  await new Promise(r => setTimeout(r, 600));
  try {
    await bot.editMessageText("Камень... Ножницы...", { chat_id: chatId, message_id: sent.message_id });
  } catch (e) {}
  await new Promise(r => setTimeout(r, 600));
  try {
    await bot.editMessageText("Камень... Ножницы... Бумага!", { chat_id: chatId, message_id: sent.message_id });
  } catch (e) {}
  await new Promise(r => setTimeout(r, 700));

  try {
    await bot.editMessageText(
      `Ты: ${names[userChoice]}\nБот: ${names[botChoice]}\n\n${result}`,
      { chat_id: chatId, message_id: sent.message_id }
    );
  } catch (e) {}
});


const roasts = [
  "Ты как Wi-Fi без пароля — все подключаются, но никто не остаётся надолго 📶",
  "Твой уровень интеллекта конкурирует с моим уровнем терпения к тебе 🙃",
  "Ты не тупой, ты просто... особенный 🌟",
  "Если бы глупость светилась, ты был бы маяком 🔦",
  "Ты как автокорректор — постоянно всё портишь 📱"
];

bot.onText(/\/compliment/, (msg) => {
  const c = compliments[Math.floor(Math.random() * compliments.length)];
  bot.sendMessage(msg.chat.id, c);
});

bot.onText(/\/roast/, (msg) => {
  const r = roasts[Math.floor(Math.random() * roasts.length)];
  bot.sendMessage(msg.chat.id, r);
});

const fortunes = [
  "будет счастлив(а) в любви, но осторожен(на) с деньгами 💰",
  "станет знаменитым(ой) благодаря необычному таланту 🌟",
  "проживёт долгую и интересную жизнь, полную путешествий ✈️",
  "найдёт свою вторую половинку в неожиданном месте 💕",
  "добьётся успеха в творческой профессии 🎨",
  "будет окружён(а) верными друзьями всю жизнь 🤝"
];

bot.onText(/\/fortune (.+)/, (msg, match) => {
  const name = match[1];
  const f = fortunes[Math.floor(Math.random() * fortunes.length)];
  bot.sendMessage(msg.chat.id, `🔮 ${name} ${f}`);
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


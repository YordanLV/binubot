const TelegramBot = require('node-telegram-bot-api');

const token = '6592297486:AAENQGFVbxiwfbNy0riLuXflyQV0P0ZQ3G4';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello! I am your bot.');
});

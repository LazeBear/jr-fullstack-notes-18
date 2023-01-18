const { Bot } = require('./bot');

const URL = 'https://pocketmon.onrender.com/v1';
const token = 'c97c9d424fed3113f8ef82972527670a';
const trainerId = 'g0fRkun19B';

async function main() {
  const bot = new Bot(URL, trainerId, token);
  await bot.start();
}

main();

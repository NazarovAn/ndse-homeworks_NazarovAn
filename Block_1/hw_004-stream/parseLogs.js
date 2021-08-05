const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream(__dirname + '/gameLogs.txt');

  const rl = readline.createInterface({
    input: fileStream
  });

  let games = 0;
  let wins = 0;
  let tails = 0;

  for await (const line of rl) {
    games++;
    if (line.includes('win')) wins++;
    if (line.includes('tail')) tails++;
  }

  console.log(`Total games: ${games}\nWin\\Loose: ${wins}\\${games - wins}\nWin rate: ${(wins / (games / 100)).toFixed(2)}%`);
  console.log(`Heads\\Tails: ${games - tails}\\${tails}`);
}

processLineByLine();

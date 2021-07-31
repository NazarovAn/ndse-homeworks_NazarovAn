const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = getRandomIntInclusive(0, 100).toString();
console.log('Загадано число в диапазоне от 0 до 100');

rl.on('line', (line) => {
  if (line === randomNumber) {
    console.log(`Отгадано число - ${randomNumber}`);
    process.exit(0);
  }

  if (line > randomNumber) {
    console.log(`Меньше ${line}`);
  } else if (line < randomNumber) {
    console.log(`Больше ${line}`);
  }
});

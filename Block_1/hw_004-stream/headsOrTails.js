const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const coinSide = Math.round(Math.random()) === 1 ? 'head' : 'tail';

rl.question('Head Or Tail?\n', (line) => {
  let result;
  if (line.toLowerCase() === coinSide) {
    result = 'win';
    console.log('win');
  } else {
    result = 'loose';
    console.log('loose');
  }

  const file = path.join(__dirname, 'gameLogs.txt');
  const logString = `result=${result}\tside=${coinSide}\n`

  fs.appendFile(file, logString, (err)=>{
    if (err) throw new Error(err);
  });

  rl.close(0);
})

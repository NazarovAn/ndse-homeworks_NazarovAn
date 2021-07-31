const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')

function getDateString(args, date) {
  let dateString;
  if (args.y || args.year) {
    dateString = `Year - ${date.getFullYear()}`;
  } else if (args.m || args.month) {
    dateString = `Month - ${date.getMonth()}`;
  } else if (args.d || args.date) {
    dateString = `Date - ${date.getDate()}`;
  } else {
    dateString = date.toISOString();
  }

  return dateString;
}

function setDateOffset(args, date, adding) {
  let changedDate = date;
  if (args.y > 0 || args.year > 0) {
    const years = args.y || args.year;
    changedDate = adding
      ? new Date(changedDate.setFullYear(date.getFullYear() + years))
      : new Date(changedDate.setFullYear(date.getFullYear() - years));
  }

  if (args.m > 0 || args.month > 0) {
    const month = args.m || args.month;
    changedDate = adding
      ? new Date(changedDate.setMonth(date.getMonth() + month))
      : new Date(changedDate.setMonth(date.getMonth() - month));
  }
  
  if (args.d || args.date) {
    const days = args.d || args.date;
    changedDate = adding
      ? new Date(changedDate.setDate(date.getDate() + days))
      : new Date(changedDate.setDate(date.getDate() - days));
  }

  return changedDate.toISOString();
}

function getChangedDate(args, date, commands) {
  let changedDate = date;
  if (commands.includes('add')) {
    changedDate = setDateOffset(args, date, true);
  } else if (commands.includes('sub')) {
    changedDate = setDateOffset(args, date, false);
  }

  return changedDate;
}

function writeDate(arguments, commands) {
  const date = new Date();
  if (commands.includes('add') || commands.includes('sub')) {
    console.log(getChangedDate(arguments, date, commands));
  } else {
    console.log(getDateString(arguments, date));
  }
}

const argv = yargs(hideBin(process.argv)).argv;
const commands = argv._;

writeDate(argv, commands);

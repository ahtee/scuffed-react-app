#!/usr/bin/env node

// pass in command line args
const [arg] = process.argv.slice(2);

const fs = require('fs');
try {
  if (arg) {
    fs.mkdir(`./${arg}`, err => {
      if (err) {
        throw err;
      }
    });
  }
} catch (err) {
  console.error(
    `Error running script! Check if your folder name already exists, choose a different folder name, or check the help command (--help, -h) for more details`
  );
}

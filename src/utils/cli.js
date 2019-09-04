#!/usr/bin/env node

// pass in command line args
const [arg] = process.argv.slice(2);

const fs = require('fs');
try {
  console.time(`Installing new-react-app boilerplate`);
  if (arg) {
    // Create a directory for the application name with the first argument.
    fs.mkdir(`./${arg}`, err => {
      if (err) {
        throw new Error(err);
      }
    });
  }
} catch (err) {
  if (err)
    console.error(
      `Error running script! Check if your folder name already exists, choose a different folder name, or check the help command (--help, -h) for more details`
    );
  console.trace(err);
}
console.timeEnd(`Installing new-react-app boilerplate`);

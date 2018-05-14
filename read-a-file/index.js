const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('filename: ', (fname) => {
  rl.close();
  console.log(`Your file name is: ${filename}`)
  fs.readFile(fname, 'utf8', (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(data.toUpperCase());
  });
})

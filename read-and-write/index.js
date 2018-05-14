const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Where is you input file: ', (inputFile) => {
  rl.question('Where do you want the output?: ', (outputFile) => {
    rl.close();

    fs.readFile(inputFile, 'utf8', (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      }

      fs.writeFile(outputFile, data.toUpperCase(), (err) => {
        if (err) {
          console.log(err.message);
          return;
        }

        console.log(`Sent output to file: ${outputFile}`);
      });
    });
  });
});


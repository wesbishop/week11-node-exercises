const readline = require('readline');
const fs = require('fs');
const http = require('https');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL: ', (urlName) => {
  rl.question('Save to a file: ', (filename) => {

    rl.close();

    http.get(urlName, (response) => {
      let pageData = '';

      response.on('data', (chunk) => {

        console.log('got some data...');
        pageData += chunk;
      });

      response.on('end', () => {

        fs.writeFile(filename, pageData, (err) => {
          if (err) {
            console.log(err.message);
            return;
          }
          console.log(`HTML saved to file: ${filename}`);
        });
      });

    }); //http request
  });  // Enter a file to save to
});  //Enter a URL
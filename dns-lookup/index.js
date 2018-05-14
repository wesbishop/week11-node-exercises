const readline = require('readline');
const dns = require('dns');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Domain name: ', (domainName) => {
  rl.close();
  console.log(`Domain name: ${domainName}`)

  // Do the DNS lookup
  dns.lookup(domainName, (err, address) => {

    if (err) {
      console.log(err.message);
      return;
    }

    console.log(`IP address: ${address}`);
  })
});

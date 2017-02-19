let mod = require('fs')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Introduzca la version ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`La version introducida es: ${answer}`);
  let content = mod.readFileSync("../package.json");
  let jsonContent = JSON.parse(content);
  jsonContent.version = +answer+
  rl.close();
});

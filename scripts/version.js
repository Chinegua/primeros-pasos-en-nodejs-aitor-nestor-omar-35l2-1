let mod = require('fs')
const readline = require('readline');
let jsonfile = require('jsonfile')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Introduzca la version ', (answer) => {
  // TODO: Log the answer in a database
  let content = mod.readFileSync("../package.json");
  let jsonContent = JSON.parse(content);
  console.log("Version actual: "+jsonContent.version)
  console.log("La version introducida es: "+answer);
  jsonContent.version = answer
  console.log(jsonContent);
  jsonfile.writeFile("../package.json",jsonContent,{spaces: 2},(err) =>{
    if(err){
      return console.log(err);
    }
    rl.close();
  });
});

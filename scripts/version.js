let mod = require('fs')
const readline = require('readline');
let jsonfile = require('jsonfile')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r2.question('Introduzca la opcion (m)odificar, (v)er ', (answer2) => {
  switch(answer2) {

  case 'm':
            rl.question('Introduzca la version ', (answer) => {

                let content = mod.readFileSync("../package.json");
                let jsonContent = JSON.parse(content);
                console.log("Version actual: "+jsonContent.version)
                console.log("La version introducida es: "+answer);
                jsonContent.version = answer
                console.log(jsonContent);
                jsonfile.writeFile("../package.json",jsonContent,{spaces: 2},(err) => {
                    if(err){
                    return console.log(err);
                     }
                    rl.close();
                    });
                });

    break;
  case 'v':

          const jsonContent = require('../package.json')
          console.log("Version actual: " + jsonContent.version)
    break;

  }
  

});

let exec = require('child_process').exec
let mod = require('fs')


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Intrdoduzca la version: ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`La version es: ${answer}`);
  rl.close();
  child = exec ('json -I -f ../package.json -e \'this.version="'+answer+'"\'' , function(error,stdout,stderr){
  console.log('stdout: ' + stdout)
  mod.writeFile("../package.json", stdout, function(err){
      if(err){
        return console.log(err);
      }
      console.log("Modified file");
  });

  if (error !== null){
     console.log('exec error: ' + error)
  }
});
})

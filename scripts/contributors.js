var exec = require('child_process').exec
var mod = require('fs')

child =exec ('git log',function(error,stdout,stderr){
  console.log('stdout: ' + stdout)
  mod.writeFile("../MAINTAINERS", stdout, function(err){
      if(err){
        return console.log(err);
      }
      console.log("Modified file");
  });

  

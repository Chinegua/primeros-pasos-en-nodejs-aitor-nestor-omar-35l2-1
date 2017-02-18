var exec = require('child_process').exec
var mod = require('fs')

child =exec ('git log',function(err){
  if(err){
    return console.log(err);
  }

mod.writeFile("../MAINTAINERS", 'child', function(err){
  if(err) {
    return console.log(err);
  }
  console.log("Modified file");
  });
});

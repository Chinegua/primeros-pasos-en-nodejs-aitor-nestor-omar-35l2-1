let exec = require('child_process').exec
let mod = require('fs')

child =exec ('node git-log.js',function(error,stdout,stderr){
  //console.log('stdout: ' + stdout)
  //console.log(stdout)
  
  mod.writeFile("contributors.json", stdout, function(err){
      if(err){
        return console.log(err);
      }
      let content = mod.readFileSync("contributors.json");
      let jsonContent = JSON.parse(content);
      console.log("User:",jsonContent[0].author);
      console.log("Date:",jsonContent[0].date);
    for (i = 0; i < jsonContent.length; i++) { 
    	//console.log(jsonContent[i].author)
    	console.log("Entra")
    	mod.appendFile("../MAINTAINERS","<Autor: "+jsonContent[i].author+">\n"+"Last Commit: "+jsonContent[i].date+" ("+jsonContent[i].message+")"+"\n"+" "+"\n", function(err){
      	if(err){
        	return console.log(err);
      	}
      	//console.log("Modified file");

  		});
	}      
      console.log("Modified file");
  });

  if (error !== null){
     console.log('exec error: ' + error)
  }
});

let exec = require('child_process').exec
let mod = require('fs')

child =exec ('node git-log.js',function(error,stdout,stderr){
  
  mod.writeFile("contributors.json", stdout, function(err){
      if(err){
        return console.log(err);
      }
      let content = mod.readFileSync("contributors.json");
      let jsonContent = JSON.parse(content);
    for (i = 0; i < jsonContent.length; i++) { 
    	
    	mod.appendFile("../MAINTAINERS","<Autor: "+jsonContent[i].author+">\n"+"Last Commit: "+jsonContent[i].date+" ("+jsonContent[i].message+")"+"\n"+" "+"\n", function(err){
      	if(err){
        	return console.log(err);
      	}

  		});
	}      
      console.log("Modified file");
  });

  if (error !== null){
     console.log('exec error: ' + error)
  }
});

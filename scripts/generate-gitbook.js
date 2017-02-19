let exec = require('child_process').exec
let child

child =exec ("../node_modules/.bin/gitbook build ../txt ../_book",(error,stdout,stderr) => {
	console.log('stdout: ' + stdout)
	console.log('stderr: ' + stderr)
	if (error !== null){
		console.log('exec error: '+ error)
	}
});



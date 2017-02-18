let exec = require('child_process').exec

child =exec ('git log --pretty=format:\'{%n  \"commit\": \"%H\",%n  \"author\": \"%aN <%aE>\",%n  \"date\": \"%ad\",%n  \"message\": \"%f\"%n},\' $@ | perl -pe \'BEGIN{print \"[\"}; END{print \"]\n\"}\' | perl -pe \'s/},]/}]/\n\'' ,function(error,stdout,stderr){

console.log(stdout)
	});

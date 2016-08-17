var express = require('express'),
app = express();


app.use(express.static(__dirname + '/'));


app.get('/api', function(req,res){
	res.json(rules);
});


app.listen(8080);
console.log("Express listening on port 8080");
var rules = [
		{id:1,rulename: "Must be 5 characers"},
		{id:2,rulename: "Must not contain numbers"},
		{id:3,rulename: "Must have a captial letter"}
	];

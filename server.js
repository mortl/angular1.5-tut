var express = require('express'),
bodyParser = require('body-parser'),
app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + '/'));


app.get('/api', function(req,res){
	res.json(rules);
});

app.get('/testing', function(req, res){
	alert('testing');
	
});

app.post('/testing', urlencodedParser,function(req,res){
	response = {
		newRule:req.body.newRule
	};
	console.log(response);
	res.end(JSON.stringify(response));
});
app.listen(8080);
console.log("Express listening on port 8080");
var rules = [
		{id:1,rulename: "Must be 5 characers"},
		{id:2,rulename: "Must not contain numbers"},
		{id:3,rulename: "Must have a captial letter"}
	];

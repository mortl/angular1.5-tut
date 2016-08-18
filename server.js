var express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
morgan = require('morgan'),
methodOverride = require('method-override'),
app = express();


mongoose.connect('mongodb://localhost/crudtutorial');

app.use(express.static(__dirname + '/'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));   
app.use(methodOverride());
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

var Rule = mongoose.model('Rule', {
	rulename : String
});

var _rule = new Rule();



app.get('/api', function(req, res){
	Rule.find(function(err,rules){
		if(err)
			res.send(err);

		res.json(rules);

	});

});

app.get('/api/:id', function(req,res){k
	var ruleId = req.params.id;

	Rule.findById(ruleId, function(err,rules){
			res.send(rules);
	});
});

app.post('/api',function(req,res){
	Rule.create({
		rulename :req.body.rulename,
		done:false
	},
	 function(error,rule){
	 	if(error)
	 		res.send(error);

	 	Rule.find(function(error,rules){
	 			if(error)
	 				res.send(error);

	 			res.json(rules);
	 	});
	 }
	)
});

app.delete('/api/:rule_id', function(req,res) {
	Rule.remove({
		_id :req.params.rule_id
	},
		function(err,rule){
			if(err)
				res.send(err);

			Rule.find(function(err,rules){
					if(err)
					  res.send(err)
					res.json()


			});
		}
	)


});





app.listen(8080);
console.log("Express listening on port 8080");




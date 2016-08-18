var myApp = angular.module('myApp', []);


myApp.controller("TutController",['$scope','$filter','$http','$log' ,TutController]);


function TutController($scope, $filter, $http,$log){
	$scope.name = "Martin Benes";
	$scope.job  = "Web Developer";

	$scope.handle = '';
	$scope.characters = 5;
		$http.get('/api')
		    .success(function(result){
		    	$scope.rules = result;
		    })
		    .error(function(data,status){
		    	$log.error(data);
		    });
	
	$scope.newRule = "";
	$scope.addRule = function(){
			$http.post('/api', {newRule:$scope.newRule})
			.success(function(result){
				$scope.rules = result;
				$scope.newRule = "";
			})
			.error(function(data,status){
				console.log(data);
			});
	};
	$scope.lowercasehandle = function(){
		return $filter('lowercase')($scope.handle);
	}
}

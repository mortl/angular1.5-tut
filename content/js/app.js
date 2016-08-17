var myApp = angular.module('myApp', ['ngMessages']);


myApp.controller("TutController",['$scope','$filter', TutController]);


function TutController($scope, $filter){
	$scope.name = "Martin Benes";
	$scope.job  = "Web Developer";

	$scope.handle = '';
	$scope.characters = 5;

	$scope.rules = [
		{rulename: "Must be 5 characers"},
		{rulename: "Must not contain numbers"},
		{rulename: "Must have a captial letter"}
	];
	
	$scope.lowercasehandle = function(){
		return $filter('lowercase')($scope.handle);
	}
}

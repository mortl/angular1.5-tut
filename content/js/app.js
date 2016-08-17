var myApp = angular.module('myApp', ['ngMessages']);


myApp.controller("TutController",['$scope','$log', TutController]);


function TutController($scope, $log, $timeout){
	$scope.name = "Martin Benes";
	$scope.job  = "Web Developer";

	$scope.handle = '';
	

}

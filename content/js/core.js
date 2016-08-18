var crudApp = angular.module('crudApp', ['ngRoute']);



crudApp.config( function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'pages/first.html',
                controller:'CrudController'
            })
            .when('/second', {
                templateUrl:'pages/second.html',
                controller:'SecondController'
            });
});
crudApp.controller('CrudController', ['$scope', '$http', '$log','$filter', CrudController]);

crudApp.controller('SecondController', ['$scope','$log', function($scope,$log){
        console.log('Second');
}]);
function CrudController($scope, $http, $log,$filter) {
    $scope.formData = {};

    $scope.handle = '';
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    }

    
    $http.get('/api')
        .success(function(data) {
            $scope.rules = data;
        })
        .error(function(data, status) {
            $log.error(data);
        });

    $scope.addRule = function() {
        $http.post('/api', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.rules = data;
                $log.info(data);
            })
            .error(function(data, status) {
                $log.error(data);
            });
    };


    $scope.deleteRule = function(id) {
        $http.delete('/api/ ' + id)
            .success(function(data) {
                $scope.rules = data;
                $log.info(data);
            })
            .error(function(data, status) {
                $log.error(data);
            });
    };



}

var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.fname = "Hello";
    $scope.lname = "World";
    $scope.fullName = function() {
        return $scope.fname + " " + $scope.lname;
    }
});
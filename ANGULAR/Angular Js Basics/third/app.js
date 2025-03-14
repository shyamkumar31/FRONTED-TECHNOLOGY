var app = angular.module('bindApp', []);

app.controller('BindController', function ($scope) {
    $scope.name = "AngularJS";  // Default value for ng-model

    $scope.fruits = ["Apple", "Banana", "Cherry"]; // ng-repeat list
});

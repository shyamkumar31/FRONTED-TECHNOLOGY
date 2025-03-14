var app = angular.module('scopeApp', []);

app.run(function ($rootScope) {
    $rootScope.globalMessage = "This is from $rootScope!";
});

app.controller('MainController', function ($scope) {
    $scope.message = "Hello from MainController!";
});

app.controller('ChildController', function ($scope) {
    $scope.childMessage = "Hello from ChildController!";
});

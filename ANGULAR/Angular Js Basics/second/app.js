var app = angular.module('myApp', []);

app.controller('MainController', function ($scope) {
    $scope.message = "Hello from MainController!";
});

app.directive('customDirective', function () {
    return {
        template: "<p>This is a custom directive from an external file.</p>"
    };
});

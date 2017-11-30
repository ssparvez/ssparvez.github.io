var app = angular.module("projects", ['ngAnimate']);
console.log("yo wat up");

app.controller('controlla', function($scope, $http) {
    $scope.items= [];
    $http.get('data/projects.json').then(function(response) {
        $scope.items = response.data;
    });
});

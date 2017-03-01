'use strict';
app.controller('searchController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {

    $scope.loginData = {
        userName: "",
        password: ""
    };

    $scope.message = "";

    $scope.search = function () {

        $location.path('/searchresults');
    };

}]);
'use strict';
app.controller('sidebarController', ['$scope','$location', function ($scope,$location) {

	$scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	};

}]);
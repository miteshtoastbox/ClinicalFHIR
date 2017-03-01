'use strict';
app.controller('searchresultsController', ['$scope', '$location', 'authService','patientService','greeting','patientdata', function ($scope, $location, authService, patientService,greeting,patientdata) {

	var promGetPatients = patientService.getPatients();
	promGetPatients.then(function(r){
		$scope.searchresultData = r;
	});

    $scope.getPatientDetails = function (o) {
    	patientdata.id = o.id;
    	$location.path('/patientdetails');
	};

}]);
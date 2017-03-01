'use strict';
app.controller('episodeController', ['$scope', '$location', 'authService','patientService','greeting','patientdata', function ($scope, $location, authService, patientService,greeting,patientdata) {

	
	patientService.getPatientById(patientdata.id).then(function (results) {
        $scope.patient = results;

    }, function (error) {
        alert(error);
    });

	$scope.epDetails = function (ep) {
		$scope.ep = ep;
    };

}]);


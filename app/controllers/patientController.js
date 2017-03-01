'use strict';
app.controller('patientController', ['$scope', 'patientService','greeting','patientdata', function ($scope, patientService,greeting,patientdata) {

    $scope.patient = [];

    patientService.getPatientById(patientdata.id).then(function (results) {
        $scope.patient = results;

    }, function (error) {
        alert(error);
    });

}]);
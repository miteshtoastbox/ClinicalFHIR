(function(){

'use strict';

function controller ($location,patientService,patientdata){
    	
	var model = this;

	model.$onInit = function(){

		patientService.getPatientById(patientdata.id).then(function (results) {
        	model.patient = results;
	    }, function (error) {
	        alert(error);
	    });
	}
}

app.component("patientDetails",{
    templateUrl: "/app/templates/patientDetails-template.html",
    bindings: { name:'@'},
    controllerAs: "model",
    controller: ["$location","patientService","patientdata",controller]
});

}());
(function(){

'use strict';

function controller ($location,patientService,patientdata){
    	
	var model = this;

	model.$onInit = function(){
		var promGetPatients = patientService.getPatients();
		promGetPatients.then(function(results){
			model.searchresultData = results;
		});
	}

	model.getPatientDetails = function(o){
		patientdata.id = o.id;
		$location.path('/patientdetails');
	}
}

app.component("searchResults",{
    templateUrl: "/app/templates/searchResults-template.html",
    bindings: { name:'@'},
    controllerAs: "model",
    controller: ["$location","patientService","patientdata",controller]
});

}());
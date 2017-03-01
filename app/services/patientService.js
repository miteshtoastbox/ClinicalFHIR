'use strict';
app.factory('patientService', ['$http','$q', function ($http,$q) {

    var serviceBase = 'http://localhost:64558/';
    var patientServiceFactory = {};

    var data = [{
				  "id": 1,
				  "first_name": "Jeremy",
				  "last_name": "Harrison",
				  "email": "jharrison0@tinypic.com",
				  "gender": "Male",
				  "address1": "8496 Pond Point",
				  "address2": "051 Red Cloud Park",
				  "address3": "645 Lillian Road",
				  "address4": "3 Wayridge Hill",
				  "postcode": "99412 Jenna Avenue",
				  "dob": "1968-05-30",
				  "episode": [{
					  "patient_classcode": "41163-341",
					  "admissiontype": "Frazier",
					  "episodestart": "2/23/2010",
					  "episodeend": "5/11/2012",
					  "admitted": "10/4/2005",
					  "expected_discharged": "1/3/2001",
					  "details": "in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti"
					}, {
					  "patient_classcode": "51079-277",
					  "admissiontype": "Cunningham",
					  "episodestart": "4/16/2006",
					  "episodeend": "2/5/2005",
					  "admitted": "10/7/2010",
					  "expected_discharged": "5/5/2012",
					  "details": "quisque arcu libero rutrum ac lobortis vel dapibus at diam nam"
					}, {
					  "patient_classcode": "62802-183",
					  "admissiontype": "Smith",
					  "episodestart": "9/2/2016",
					  "episodeend": "7/22/2010",
					  "admitted": "3/27/2003",
					  "expected_discharged": "10/28/2015",
					  "details": "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat"
					}]
				}, {
				  "id": 2,
				  "first_name": "Sharon",
				  "last_name": "Porter",
				  "email": "sporter1@bloglovin.com",
				  "gender": "Female",
				  "address1": "4 Merry Lane",
				  "address2": "313 Wayridge Avenue",
				  "address3": "14 Holy Cross Avenue",
				  "address4": "39147 Dorton Circle",
				  "postcode": "5 Kinsman Court",
				  "dob": "1978-05-13",
				  "episode": [{
					  "patient_classcode": "43063-261",
					  "admissiontype": "Parker",
					  "episodestart": "7/6/2005",
					  "episodeend": "10/15/2002",
					  "admitted": "1/2/2017",
					  "expected_discharged": "11/5/2005",
					  "details": "lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat"
					}, {
					  "patient_classcode": "64942-1073",
					  "admissiontype": "Washington",
					  "episodestart": "9/15/2000",
					  "episodeend": "11/14/2012",
					  "admitted": "5/22/2001",
					  "expected_discharged": "10/13/2002",
					  "details": "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit"
					},
					{
					  "patient_classcode": "64942-1073",
					  "admissiontype": "Washington",
					  "episodestart": "9/15/2000",
					  "episodeend": "11/14/2012",
					  "admitted": "5/22/2001",
					  "expected_discharged": "10/13/2002",
					  "details": "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit"
					},
					{
					  "patient_classcode": "64942-1073",
					  "admissiontype": "Washington",
					  "episodestart": "9/15/2000",
					  "episodeend": "11/14/2012",
					  "admitted": "5/22/2001",
					  "expected_discharged": "10/13/2002",
					  "details": "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit"
					},
					{
					  "patient_classcode": "64942-1073",
					  "admissiontype": "Washington",
					  "episodestart": "9/15/2000",
					  "episodeend": "11/14/2012",
					  "admitted": "5/22/2001",
					  "expected_discharged": "10/13/2002",
					  "details": "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit"
					},
					{
					  "patient_classcode": "64942-1073",
					  "admissiontype": "Washington",
					  "episodestart": "9/25/2000",
					  "episodeend": "11/14/2012",
					  "admitted": "5/22/2001",
					  "expected_discharged": "10/13/2002",
					  "details": "convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit"
					}]
				}, {
				  "id": 3,
				  "first_name": "Benjamin",
				  "last_name": "Rodriguez",
				  "email": "brodriguez2@google.es",
				  "gender": "Male",
				  "address1": "40020 Mayer Road",
				  "address2": "443 Debs Park",
				  "address3": "37300 Springs Street",
				  "address4": "561 Homewood Circle",
				  "postcode": "95858 Huxley Terrace",
				  "dob": "1977-02-12"
				}, {
				  "id": 4,
				  "first_name": "William",
				  "last_name": "Watkins",
				  "email": "wwatkins3@examiner.com",
				  "gender": "Male",
				  "address1": "78223 School Circle",
				  "address2": "837 Marcy Plaza",
				  "address3": "2313 Mcguire Circle",
				  "address4": "711 Fuller Hill",
				  "postcode": "09 Larry Alley",
				  "dob": "1985-09-02"
				}, {
				  "id": 5,
				  "first_name": "Jessica",
				  "last_name": "Burns",
				  "email": "jburns4@netlog.com",
				  "gender": "Female",
				  "address1": "2421 Linden Pass",
				  "address2": "9 Reindahl Crossing",
				  "address3": "935 Warner Alley",
				  "address4": "5 Mesta Pass",
				  "postcode": "7195 Dakota Avenue",
				  "dob": "1989-05-14"
				}];


    var _getPatients = function () {
        
        var deferred = $q.defer();            
        $q.when(true).then(function(){
        	deferred.resolve(data);              
        }, function(error){                            
            deferred.reject(error);
        });
        return deferred.promise; 
    };

    var _getPatientById = function (id) {
        
        var deferred = $q.defer();            
        $q.when(true).then(function(){
        	deferred.resolve(data[id-1]);              
        }, function(error){                            
            deferred.reject(error);
        });
        return deferred.promise; 
    };


    patientServiceFactory.getPatients = _getPatients;
    patientServiceFactory.getPatientById = _getPatientById;

    return patientServiceFactory;

}]);
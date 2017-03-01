var app = angular.module('AngularAuthApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html"
    });

    $routeProvider.when("/search", {
        controller: "searchController",
        templateUrl: "/app/views/search.html"
    });

    $routeProvider.when("/searchresults", {
        template: "<search-results></search-results>"
    });

    $routeProvider.when("/patientdetails", {
        template: "<patient-details></patient-details>"
    });

    $routeProvider.when("/episode", {
        controller: "episodeController",
        templateUrl: "/app/views/episode.html"
    });

    $routeProvider.when("/controls", {
        controller: "controlsController",
        templateUrl: "/app/views/controls.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});

app.service("patientdata", function PatientData(){
        var patientdata = this;
        patientdata.id = null;
    }
)

app.service("greeting", function Greeting(){
        var greeting = this;
        greeting.message = {id:"Default"};
    }
)

// app.run(['authService', function (authService) {
//     authService.fillAuthData();
// }]);

// app.config(function ($httpProvider) {
//     $httpProvider.interceptors.push('authInterceptorService');
// });
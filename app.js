var app = angular.module("healthApp", ["ngRoute"]);


/* ==============================
   Auto seed clinics (only once)
   ============================== */

if (!localStorage.getItem("clinics")) {

    localStorage.setItem("clinics", JSON.stringify([
        { name: "City Clinic", address: "Main Road", lat: 19.0760, lng: 72.8777 },
        { name: "Metro Hospital", address: "Station Road", lat: 19.0810, lng: 72.8900 },
        { name: "Health Care Center", address: "Market Area", lat: 19.0700, lng: 72.8650 }
    ]));

}


/* ==============================
   Routing
   ============================== */

app.config(function ($routeProvider) {

    $routeProvider

        .when("/register", {
            templateUrl: "views/register.html",
            controller: "patientController"
        })

        .when("/appointment", {
            templateUrl: "views/appointment.html",
            controller: "appointmentController"
        })

        .when("/admin", {
            templateUrl: "views/admin.html",
            controller: "adminController"
        })

        .when("/dashboard", {
            templateUrl: "views/dashboard.html",
            controller: "dashboardController"
        })

        .when("/map", {
            templateUrl: "views/map.html",
            controller: "mapController"
        })

        .when("/data", {
            templateUrl: "views/data/data.html",
            controller: "dataController"
        })

        .otherwise({
            redirectTo: "/register"
        });

});

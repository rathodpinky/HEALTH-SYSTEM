app.controller("patientController", function ($scope, storageService) {

    $scope.savePatient = function () {

        var patients = storageService.get("patients");

        $scope.patient.id = Date.now();

        patients.push($scope.patient);

        storageService.set("patients", patients);

        alert("Patient saved!");

        $scope.patient = {};
    };

});

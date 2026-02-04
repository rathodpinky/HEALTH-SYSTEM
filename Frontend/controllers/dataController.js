app.controller("dataController", function ($scope, storageService) {

    $scope.patients = storageService.get("patients");
    $scope.appointments = storageService.get("appointments");
    $scope.clinics = storageService.get("clinics");

    $scope.clearAll = function () {
        if (confirm("Delete all data?")) {
            localStorage.clear();
            location.reload();
        }
    };

});

app.controller("dashboardController", function ($scope, storageService, $timeout) {

    var patients = storageService.get("patients");
    var appointments = storageService.get("appointments");

    $scope.totalPatients = patients.length;
    $scope.totalAppointments = appointments.length;

    $scope.waiting = appointments.filter(a => a.status == "Waiting").length;
    $scope.done = appointments.filter(a => a.status == "Done").length;

    var male = patients.filter(p => p.gender == "Male").length;
    var female = patients.filter(p => p.gender == "Female").length;

    $timeout(function () {

        new Chart(document.getElementById("genderChart"), {
            type: "pie",
            data: {
                labels: ["Male", "Female"],
                datasets: [{
                    data: [male, female]
                }]
            }
        });

        new Chart(document.getElementById("statusChart"), {
            type: "bar",
            data: {
                labels: ["Waiting", "Completed"],
                datasets: [{
                    data: [$scope.waiting, $scope.done]
                }]
            }
        });

    }, 200);

});

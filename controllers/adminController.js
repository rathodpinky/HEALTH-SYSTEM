app.controller("adminController", function ($scope, storageService) {

    $scope.appointments = storageService.get("appointments");

    $scope.callNext = function () {

        for (var i = 0; i < $scope.appointments.length; i++) {

            if ($scope.appointments[i].status === "Waiting") {
                $scope.appointments[i].status = "In Progress";
                break;
            }
        }

        storageService.set("appointments", $scope.appointments);
    };

    $scope.complete = function (appointment) {
        appointment.status = "Done";
        storageService.set("appointments", $scope.appointments);
    };

    $scope.clearAppointments = function () {
        if (confirm("Clear all appointments?")) {
            storageService.set("appointments", []);
            $scope.appointments = [];
        }
    };

    $scope.save = function (appointment) {
       storageService.set("appointments", $scope.appointments);
       alert("Notes saved!");
    };


});

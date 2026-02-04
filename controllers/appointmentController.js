app.controller("appointmentController", function ($scope, storageService) {

    $scope.patients = storageService.get("patients");

    var today = new Date().toISOString().split("T")[0];

    $scope.appointment = {
        date: today
    };

    $scope.appointments = storageService.get("appointments");


    $scope.bookAppointment = function () {

        var allAppointments = storageService.get("appointments");

        var token = allAppointments.length + 1;

        var newAppointment = {
            token: token,
            name: $scope.appointment.patient.name,
            date: $scope.appointment.date,
            status: "Waiting",
            remark: ""
        };

        allAppointments.push(newAppointment);

        storageService.set("appointments", allAppointments);

        $scope.appointments = allAppointments;

        alert("Token Generated: " + token);

        $scope.appointment.patient = "";
    };


    // ✅ DELETE FEATURE
    $scope.deleteAppointment = function (index) {

        var allAppointments = storageService.get("appointments");

        allAppointments.splice(index, 1);

        storageService.set("appointments", allAppointments);

        $scope.appointments = allAppointments;
    };

});

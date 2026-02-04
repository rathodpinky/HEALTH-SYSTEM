app.controller("mapController", function ($scope, storageService, $timeout) {

    function loadMap() {

        var clinics = storageService.get("clinics");

        navigator.geolocation.getCurrentPosition(function (pos) {

            var userLocation = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };

            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: userLocation
            });

            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: "You are here"
            });

            clinics.forEach(function (c) {

                var marker = new google.maps.Marker({
                    position: { lat: c.lat, lng: c.lng },
                    map: map,
                    title: c.name
                });

                var info = new google.maps.InfoWindow({
                    content: "<b>" + c.name + "</b><br>" + c.address
                });

                marker.addListener("click", function () {
                    info.open(map, marker);
                });

            });

        });

    }

    $timeout(loadMap, 300);

});

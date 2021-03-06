angular.module('app').controller('HomeController', HomeController);

function HomeController(dataFactory){
    var vm = this;

    dataFactory.findAllProperties().then(function(response){
        rand1 = Math.random();
        rand2 = Math.random();
        rand3 = Math.random();
        vm.feat1 = response[Math.floor(rand1*response.length)];
        vm.feat2 = response[Math.floor(rand2*response.length)];
        vm.feat3 = response[Math.floor(rand3*response.length)];

        vm.new1 = response[response.length - 1];
        vm.new2 = response[response.length - 2];
        vm.new3 = response[response.length - 3];
        vm.new4 = response[response.length - 4];

        $('.carousel').carousel({
            interval: 2000
        });

        // function initMap(){
        //     var uluru = {lat: -25.363, lng: 131.044};
        //     var map = new google.maps.Map(document.getElementById('map'), {
        //         zoom: 4,
        //         center: uluru
        //     });

        //     var marker = new google.maps.Marker({
        //         position: uluru,
        //         map: map
        //     });
        // }
    }).catch(function(error){
        console.log(error);
    });
};
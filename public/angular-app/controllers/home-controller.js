angular.module('app').controller('HomeController', HomeController);

function HomeController(dataFactory){
    var vm = this;

    dataFactory.findAllProperties().then(function(response){
        vm.new1 = response[response.length - 1];
        vm.new2 = response[response.length - 2];
        vm.new3 = response[response.length - 3];
        vm.feat = response[Math.floor(Math.random()*response.length)];
    }).catch(function(error){
        console.log(error);
    });
};
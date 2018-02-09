angular.module('app').controller('PropertyController', PropertyController);

function PropertyController(dataFactory){
    var vm = this;

    dataFactory.findAllProperties().then(function(response){
        vm.properties = response;
    }).catch(function(error){
        console.log(error);
    });
};
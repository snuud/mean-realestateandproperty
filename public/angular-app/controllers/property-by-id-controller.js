angular.module('app').controller('PropertyByIdController', PropertyByIdController);

function PropertyByIdController(dataFactory, $routeParams){
    var vm = this;

    dataFactory.findPropertyById($routeParams.id).then(function(response){
        vm.property = response;
        console.log(vm.property);
    }).catch(function(error){
        console.log(error);
    });
};
angular.module('app').controller('ManagePropertyController', ManagePropertyController);

function ManagePropertyController(dataFactory, $route){
    var vm = this;

    dataFactory.findAllProperties().then(function(response){
        vm.properties = response;
    }).catch(function(error){
        console.log(error);
    });

    vm.addProperty = function(){
        var property = {
            image: vm.image,
            option: vm.option,
            status: vm.status,
            district: vm.district,
            location: vm.location,
            latitude: vm.latitude,
            longitude: vm.longitude,
            type: vm.type,
            bedroom: vm.bedroom,
            bathroom: vm.bathroom,
            parking: vm.parking,
            layout: vm.layout,
            land: vm.land,
            description: vm.description,
            price: vm.price
        }

        dataFactory.addNewProperty(property).then(function(response){
            alert('New property successfully created.');
            $route.reload();
        }).catch(function(error){
            alert('Failed to create property: ' + error);
        });
    };

    vm.deleteProperty = function(id){
        dataFactory.removePropertyById(id).then(function(response){
            alert('Successfully removed the selected property.');
            $route.reload()
        }).catch(function(error){
            alert('Failed to remove property: ' + error);
        });
    };
};
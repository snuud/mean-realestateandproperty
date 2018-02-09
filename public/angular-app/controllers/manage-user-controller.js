angular.module('app').controller('ManageUserController', ManageUserController);

function ManageUserController(dataFactory, $route, $window, AuthFactory, $location){
    var vm = this;

    dataFactory.findAllUsers().then(function(response){
        vm.users = response;
    }).catch(function(error){
        console.log(error);
    });

    vm.registerUser = function(){
        var user = {
            username: vm.username,
            password: vm.password
        }

        if (!vm.username || !vm.password){
            vm.error = 'Please fill in the username and password fields!';
        } else {
            dataFactory.addNewUser(user).then(function(response){
                alert('New user successfully created.');
                $route.reload();
            }).catch(function(error){
                alert('Failed to create user: ' + error);
            });
        }
    };

    vm.deleteUser = function(id){
        dataFactory.removeUserById(id).then(function(response){
            alert('Successfully removed the selected user.');
            AuthFactory.isLoggedIn = false;
            delete $window.sessionStorage.token;
            $location.path('/');
        }).catch(function(error){
            alert('Failed to remove user: ' + error);
        });
    };
};
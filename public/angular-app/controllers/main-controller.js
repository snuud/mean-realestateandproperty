angular.module('app').controller('MainController', MainController);

function MainController($http, $location, $window, AuthFactory, jwtHelper){
    var vm = this;

    vm.isLoggedIn = function(){
        if (AuthFactory.isLoggedIn){
            return true;
        } else {
            return false;
        }
    };

    vm.login = function(){
        if (vm.username && vm.password){
            var user = {
                username: vm.username,
                password: vm.password
            };

            $http.post('/api/user/login', user).then(function(response){
                if (response.data.success) {
                    $window.sessionStorage.token = response.data.token;
                    AuthFactory.isLoggedIn = true;
                    var token = $window.sessionStorage.token;
                    var decodedToken = jwtHelper.decodeToken(token);
                    vm.loggedInUser = decodedToken.username;
                }
                // alert(response.data.message);
                vm.message = response.data.message;
                $location.path('/');
            }).catch(function(error) {
                // alert(error.data.message);
                vm.message = error.data.message;
                $location.path('/login');
            })
        }
    }

    vm.logout = function(){
        AuthFactory.isLoggedIn = false;
        delete $window.sessionStorage.token;
        $location.path('/');
    }

    $(document).on('click', function(event){
      var $clickedOn = $(event.target),
          $collapsableItems = $('.collapse'),
          isToggleButton = ($clickedOn.closest('.navbar-toggle').length == 1),
          isLink = ($clickedOn.closest('a').length == 1),
          isOutsideNavbar = ($clickedOn.parents('.navbar').length == 0);

      if( (!isToggleButton && isLink) || isOutsideNavbar ) {
        $collapsableItems.each(function(){
          $(this).collapse('hide');
        });
      }
    });
}
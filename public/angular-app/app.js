angular.module('app', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($routeProvider, $locationProvider, $httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/',{
            templateUrl: 'angular-app/views/home.html',
            controller: HomeController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/home', {
            templateUrl: 'angular-app/views/home.html',
            controller: HomeController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/property', {
            templateUrl: 'angular-app/views/property.html',
            controller: PropertyController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/buy', {
            templateUrl: 'angular-app/views/buy.html',
            controller: PropertyController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/rent', {
            templateUrl: 'angular-app/views/rent.html',
            controller: PropertyController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/property/:id', {
            templateUrl: 'angular-app/views/property-by-id.html',
            controller: PropertyByIdController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/about', {
            templateUrl: 'angular-app/views/about.html',
            controller: AboutController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/contact', {
            templateUrl: 'angular-app/views/contact.html',
            controller: ContactController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/login', {
            templateUrl: 'angular-app/views/login.html',
            controller: MainController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/manageuser', {
            templateUrl: 'angular-app/views/manage-user.html',
            controller: ManageUserController,
            controllerAs: 'vm',
            access: {
                restricted: true
            }
        }).
        when('/manageproperty', {
            templateUrl: 'angular-app/views/manage-property.html',
            controller: ManagePropertyController,
            controllerAs: 'vm',
            access: {
                restricted: true
            }
        }).
        otherwise({
            redirectTo : '/'
        });
};

function run($rootScope, $location, $window, AuthFactory) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
            event.preventDefault();
            $location.path('/');
        }
    });
}
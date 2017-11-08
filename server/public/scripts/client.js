var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/new', {
      templateUrl: '/views/templates/new.html',
      controller: 'NewController',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/edit', {
      templateUrl: '/views/templates/edit.html',
      controller: 'EditController',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/core', {
      templateUrl: '/views/templates/core.html',
      controller: 'CoreController',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/custom', {
      templateUrl: '/views/templates/custom.html',
      controller: 'CustomController',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    }).when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'NavController as nc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    
    .when('/manage', {
      templateUrl: '/views/templates/manage.html',
      controller: 'ManageController',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});
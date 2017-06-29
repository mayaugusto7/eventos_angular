'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute']).
    run(['$rootScope', function ($rootScope) {

    $rootScope.$on('handleEmit', function (event, args) {
        $rootScope.$broadcast('handleBroadcast', args);
    });

}]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');


  $routeProvider.otherwise({redirectTo: '/'});
}]);

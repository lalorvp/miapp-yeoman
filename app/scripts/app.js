'use strict';

/**
 * @ngdoc overview
 * @name miappApp
 * @description
 * # miappApp
 *
 * Main module of the application.
 */
angular
  .module('miappApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/listado', {
        templateUrl: 'views/listado.html',
        controller: 'ListadoCtrl',
        controllerAs: 'listado'
      })
      .when('/registro', {
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl',
        controllerAs: 'registro'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix("");
  });

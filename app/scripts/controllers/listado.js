'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:ListadoCtrl
 * @description
 * # ListadoCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('ListadoCtrl', function ($scope, UserService) {
    UserService.listado()
    	.then(function(response){
    		console.log(response.data.data);
    		$scope.usuarios = response.data.data;
    	})
  });

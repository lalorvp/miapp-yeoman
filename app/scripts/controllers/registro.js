'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('RegistroCtrl', function ($scope, UserService, $location) {
    
    $scope.onSubmit = function(){
    	if ($scope.registroForm.$valid){
			UserService.registrar($scope.usuario)
				.then(function(response){
					
						$location.path('/listado');			
					
				})			
}
    }
  });

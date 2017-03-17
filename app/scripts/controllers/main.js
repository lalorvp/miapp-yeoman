'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('MainCtrl', function ($scope, UserService, $cookies) {

  		$scope.onSubmit = function(){
  			if ($scope.loginForm.$valid) {
  				//enviamos datos
  				UserService.login($scope.usuario)
  					.then(function(response){
  						console.log(response);
  						$cookies.put('token',response.data.token);

  						var token = $cookies.get('token');
  						console.log(token);
  					});
  			}
  		}
  });

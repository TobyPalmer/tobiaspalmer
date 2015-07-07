'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
	.controller('MainCtrl', function ($scope) {
		
		$scope.theText = "Vill du veta en hemlis?";

		$scope.getSecret = function(){
			$scope.theText = "Jocke är en slyna";
		}

		$scope.deriveThis = function(theString){
			$scope.theText = derive(theString);
		}

		$scope.integrateThis = function(theString){
			$scope.theText = integrate(theString);
		}

	});


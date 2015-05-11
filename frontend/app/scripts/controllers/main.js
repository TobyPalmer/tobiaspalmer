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

	});


'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
  .controller('MenuCtrl', function ($scope, $location) {
    $scope.isActive = function(path) {
	    if ($location.path() == path) {
	      return "active"
	    } else {
	      return ""
	    }
	}
});

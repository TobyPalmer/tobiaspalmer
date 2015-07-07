'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
  .controller('ContactCtrl', function ($scope) {
        $scope.contactInfo = {
            fname: "Tobias",
            lname: "Palmér",
            phone: "0702513724",
            mail: "tp@tobiaspalmer.se"
        };
  });


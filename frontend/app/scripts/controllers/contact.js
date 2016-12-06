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
            mail: "tp@tobiaspalmer.se",
            linkedinURL: "http://www.linkedin.com/in/tobias-palm%C3%A9r-2b852863?trk=hp-identity-photo"
        };

        $scope.linkModelFunc = function (url){
				  $window.open(url);
				}
  });


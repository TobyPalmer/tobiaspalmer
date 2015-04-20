'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:FrisbeeCtrl
 * @description
 * # FrisbeeCtrl
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
    .config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['*'];
  })
	.controller('FrisbeeCtrl', function ($scope, $http, $q, weatherService, $filter) {
		var Latitude = 58.59;	
		var Longitude = 16.18;

		$scope.weatherData = {};
		$scope.currentWeather = {};


	   	weatherService.getWeather().then(function(data){
   			$scope.weatherData = data;
   			console.log($scope.weatherData);
   			$scope.currentWeather = $scope.weatherData.timeseries[getCurrentTimeIndex()];
   			console.log($scope.currentWeather);
   		});


   		var getCurrentTimeIndex = function(){
   			//for some reason it is not possible to only get HH
   			//it becomes unix time = 0
   			var _date = $filter('date')(new Date(),'HH:mm');
   			var currentHour = _date[0] + _date[1];

   			return currentHour-7;

   		}

   		$scope.getTemp = function(){
   			return $scope.currentWeather.t;
   		}

   		$scope.getWind = function(){
   			return $scope.currentWeather.ws;
   		}

   		$scope.frisbee = function(){
   			var windLimit = 4;
   			var tempLimit = 10;
   			if($scope.currentWeather.t < tempLimit && $scope.currentWeather.ws > windLimit){
   				return "Är du helt galen!? Det både blåser och är kallt!"
   			}
   			else if($scope.currentWeather.t >=tempLimit && $scope.currentWeather.ws > windLimit){
   				return "Det är ju tillräckligt varmt men din frisbee kommer blåsa iväg!"
   			}
   			else if($scope.currentWeather.t < tempLimit && $scope.currentWeather.ws <= windLimit){
   				return "Det är ju svinkallt men det blåser ju inte så mycket!"
   			}
   			else{
   				return "Det är ju perfekt frisbeegolfväder! Vad väntar du på?"
   			}
   		}

   		
	})



  	.factory('weatherService', ['$http','$q', function($http, $q) {
    var s = {};

    s.getWeather = function(){

	  	var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/58.59/lon/16.18/data.json'
          }).success(function(data, status, headers, config) {

            deferred.resolve(data);

            console.log("success");

          }).error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              deferred.reject("rejected");
              console.log(status);
          });

          return deferred.promise;

    }

    return s;

}]);


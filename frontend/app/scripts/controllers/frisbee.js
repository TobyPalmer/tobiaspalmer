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

    var currentHour;


	   	weatherService.getWeather().then(function(data){
   			$scope.weatherData = data;
   			console.log($scope.weatherData, "weatherdata");
        console.log(getCurrentTimeIndex(), "current time index");
   			$scope.currentWeather = $scope.weatherData.timeSeries[getCurrentTimeIndex()];
   			console.log($scope.currentWeather, 'currentweather');
        $scope.currentWeather.temp = $scope.getTemp();
        $scope.currentWeather.wind = $scope.getWind();
   		});


   		var getCurrentTimeIndex = function(){
   			//for some reason it is not possible to only get HH
   			//it becomes unix time = 0
   			var _date = $filter('date')(new Date(),'HH:mm');

        var referencetime;

        if($scope.weatherData.referenceTime[11] == 0){
            referencetime = $scope.weatherData.referenceTime[12]
        }
        else{
            referencetime = $scope.weatherData.referenceTime[11] + $scope.weatherData.referenceTime[12];
            console.log(referencetime);
        }

        if(_date[0] == 0){
          currentHour = _date[1];
        }
        else{
          currentHour = _date[0] + _date[1];
        }
   			
   			return currentHour-referencetime;

   		}

   		$scope.getTemp = function(){
        // Getting the temp
   			return $scope.currentWeather.parameters[1].values[0];
   		}

   		$scope.getWind = function(){
        // Getting the wind speed
   			return $scope.currentWeather.parameters[4].values[0];
   		}

   		$scope.frisbeeText = function(){
     			var windLimit = 5;
     			var tempLimit = 10;

          if(currentHour < 21 && currentHour > 6){
         			if($scope.getTemp() < tempLimit && $scope.getWind() > windLimit){
         				return "Är du helt galen!? Det både blåser och är kallt!"
         			}
         			else if($scope.getTemp() >= tempLimit && $scope.getWind() > windLimit){
         				return "Det är ju tillräckligt varmt men din frisbee kommer blåsa iväg!"
         			}
         			else if($scope.getTemp() < tempLimit && $scope.getWind() <= windLimit){
         				return "Det är ju svinkallt men det blåser ju inte så mycket!"
         			}
         			else{
         				return "Det är ju perfekt frisbeegolfväder! Vad väntar du på?"
         			}
          }
          else{
              return "Nu är det väl ändå för mörkt för att spela?"
          }
   		}

   		
	})



  	.factory('weatherService', ['$http','$q', function($http, $q) {
    var s = {};

    s.getWeather = function(){

	  	var deferred = $q.defer();
        $http({
            method: 'GET',
            // url: 'http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/58.59/lon/16.18/data.json'
            url: 'http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json'
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


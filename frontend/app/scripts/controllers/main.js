'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
	.controller('MainCtrl', function ($scope, CourseService, $sce) {
		
 		$scope.profilePic = $sce.trustAsResourceUrl('./images/toby.jpg');

		var lang = CourseService.getProgrammingLanguages();
		var fw = CourseService.getProgrammingFrameworks();

		var filterDuplicates = function(array){
			var temp = [];
			for(var i = 0; i < array.length; i++){
				var found = false;
				for(var j = 0; j < temp.length; j++){
					if(array[i] == temp[j]){
						found = true;
					}
				}
				if(!found)
					temp.push(array[i]);
			}
			
			return temp;
		};
		$scope.languages = filterDuplicates(lang);
		$scope.frameworks = filterDuplicates(fw);



});


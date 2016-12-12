'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
  .controller('CoursesCtrl', function ($scope, $location ,CourseService) {
    $scope.searchString = $location.hash();
    $scope.courses = CourseService.getCourses();
    $scope.coursesShowing = "Programming Courses";
    var programmingCoursesShowing = false;

    if($location.hash() !== '') {
        $scope.courses = CourseService.searchCourses($scope.searchString);
    }

    $scope.toggleProgrammingCourses = function(){
    	if(!programmingCoursesShowing){
    		$scope.courses = CourseService.getProgrammingCourses();
    		$scope.coursesShowing = "All Courses";
    		programmingCoursesShowing = true;
    	}
    	else{
    		$scope.courses = CourseService.getCourses();
    		$scope.coursesShowing = "Programming Courses";
    		programmingCoursesShowing = false;
    	}
    };
  });


'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
    .controller('CourseCtrl', function ($scope, CourseService, $route) {

        $scope.course = CourseService.getCourse($route.current.params.name);
        
        $scope.hasLanguages = function(){
            if($scope.course.languages[0] == "")
                return false;

            return true;
        };
        $scope.hasFrameworks = function(){
            if($scope.course.frameworks[0] == "")
                return false;

            return true;
        };
        $scope.hasVideo = function(){
            if($scope.course.video == "")
                return false;

            return true;
        };
        $scope.getVideolink = function(){
            return $scope.course.video;
        };

    })
    .directive('youtube', function($sce) {
      return {
        restrict: 'EA',
        scope: { code:'=' },
        replace: true,
        template: '<div style="height:400px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" ng-src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
        link: function (scope) {
            scope.$watch('code', function (newVal) {
               if (newVal) {
                   scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
               }
            });
        }
      };
});


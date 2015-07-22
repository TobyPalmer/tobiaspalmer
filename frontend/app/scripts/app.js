'use strict';

/**
 * @ngdoc overview
 * @name tobiaspalmerApp
 * @description
 * # tobiaspalmerApp
 *
 * Main module of the application.
 */
 
angular
  .module('tobiaspalmerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl'
      })
      .when('/courses/:name', {
        templateUrl: 'views/course.html',
        controller: 'CourseCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/frisbee', {
        templateUrl: 'views/frisbee.html',
        controller: 'FrisbeeCtrl'
      })
      .when('/derive', {
        templateUrl: 'views/derive.html',
        controller: 'DeriveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

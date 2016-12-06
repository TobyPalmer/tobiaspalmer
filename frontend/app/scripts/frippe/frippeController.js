'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:FrippeCtrl
 * @description
 * # FrippeCtrl
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
    .controller('FrippeCtrl', function ($scope, $facebook, fb) {
        $scope.currentHole = 0;
        $scope.course = [
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3},
            {pair: 3,
            score: 3}
        ];

      $scope.isLoggedIn = false;
      $scope.friends = [];
      $scope.selectedFriends = [];
      $scope.friends.push({
        name: 'Jonas Kinvall',
        id: 1
      },
      {
        name: 'Love Lidberg',
        id: 2
      },
      {
        name: 'Martin Nygren',
        id: 3
      },
      {
        name: 'Anton Arbring',
        id: 4
      })

      $scope.selectFriend = function() {
        console.log(_.where($scope.friends, {id:$scope.selectedFriendId}));
      }

      $scope.login = function() {
        $facebook.login().then(function() {
          refresh();
        });
      }

      $scope.logout = function() {
        $facebook.logout().then(function() {
          refresh();
        });
      }
      function refresh() {
        $facebook.api("/me").then( 
          function(response) {
            $scope.welcomeMsg = "Welcome " + response.name;
            console.log(response);
            $scope.isLoggedIn = true;
          },
          function(err) {
            $scope.welcomeMsg = "Please log in";
            $scope.isLoggedIn = false;
          });
      }

      $scope.getFriends = function() {
        fb.getFriends().then((response) => {
            $scope.friends = response;
            console.log($scope.friends);
        })
      }
      
      refresh();

});


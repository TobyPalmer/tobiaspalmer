'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
  .controller('LobbysCtrl', function ($scope) {

    $scope.lobbys = [{name:"lobby1", maxplayers: 2, id:0}];

    $scope.addLobby = function(lobbyName, maxPlayers){
        var lobbyId = $scope.lobbys.length;
        var lobby = {name:lobbyName, maxplayers:maxPlayers, id:lobbyId};
        $scope.lobbys.push(lobby);
    };
});

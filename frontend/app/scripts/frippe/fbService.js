'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:CourseService
 * @description
 * # CourseService
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
.config( function( $facebookProvider ) {
	$facebookProvider.setAppId('1529140314061800');
	$facebookProvider.setVersion("v2.6");
	$facebookProvider.setCustomInit({
		xfbml      : true,
		status     : true, 
		cookie     : true 
	});
})

.run( function( $rootScope ) {
  // Load the facebook SDK asynchronously
  (function(){
     // If we've already installed the SDK, we're done
     if (document.getElementById('facebook-jssdk')) {return;}

     // Get the first script element, which we'll use to find the parent node
     var firstScriptElement = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     var facebookJS = document.createElement('script'); 
     facebookJS.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = '//connect.facebook.net/en_US/sdk.js';

     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
   }());
})
.factory('fb', ['$facebook', '$q', function($facebook, $q) {
	var f = {};
	var deferred = $q.defer();
	f.getFriends = function(){
		console.log('get friends');
		$facebook.api("/me/friendlists").then( 
			function(response) {
				deferred.resolve(response);
			},
			function(err) {
				deferred.reject(err);
			}
		);
		return deferred.promise;
	}

	return f;

}]);
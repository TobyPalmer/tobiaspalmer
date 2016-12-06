'use strict';

/**
 * @ngdoc function
 * @name tobiaspalmerApp.controller:ContactCtrl
 * @description
 * # SillCtrl
 * Controller of the tobiaspalmerApp
 */
angular.module('tobiaspalmerApp')
  .controller('SillCtrl', function ($scope) {


  		$scope.numberOfPortions = 5;

        $scope.sills = [
        {
        	 name: 'Asiatisk Sill',
        	 ingredients: [
             {
        	 	name: 'Sill',
        	 	quantityFive: 420,
        	 	quantity: 420,
        	 	unit: 'g'
        	 },
             {
                name: 'Vatten',
                quantityFive: 11.5,
                quantity: 11.5,
                unit: 'dl'
             },
             {
                name: 'Socker',
                quantityFive: 1,
                quantity: 1,
                unit: 'dl'
             },
             {
                name: 'Ättiksprit (12%)',
                quantityFive: 0.5,
                quantity: 0.5,
                unit: 'dl'
             },
             {
                name: 'Ingefära',
                quantityFive: 12,
                quantity: 12,
                unit: 'cm'
             },
             {
                name: 'Vitlöksklyftor',
                quantityFive: 2,
                quantity: 2,
                unit: 'st'
             },
             {
                name: 'Röd chilifrukt (t ex spansk peppar)',
                quantityFive: 0.5,
                quantity: 0.5,
                unit: 'st'
             },
             {
                name: 'Koriander',
                quantityFive: 0.5,
                quantity: 0.5,
                unit: 'Krukor'
             }],
        	 image: 'http://www.ica.se/imagevaultfiles/id_21457/cf_1286/asiatisk_sill_b0610.jpg',
        	 description: 'Asiatisk sill med hetta är en ny och spännande sillinläggning. Smaker av vitlök, chili, ingefära och koriander ger sillen extra smak. Passar utmärkt på buffé.',
        	 rating: [1,2,3,4,0],
        	 howToMake: ''
        },
        {
        	 name: 'Smokey Hickory',
        	 ingredients: [
             {
        	 	name: 'Liten burk löksill',
        	 	quantityFive: 1,
        	 	quantity: 1,
        	 	unit: 'st'
        	 },
             {
                name: 'Vitlöksklyftor',
                quantityFive: 1,
                quantity: 1,
                unit: 'st'
             },
             {
                name: 'Creme fraiche',
                quantityFive: 2,
                quantity: 2,
                unit: 'dl'
             },
             {
                name: 'Liquid smoke',
                quantityFive: 1,
                quantity: 1,
                unit: 'tsk'
             },
             {
                name: 'Skånsk senap',
                quantityFive: 1,
                quantity: 1,
                unit: 'tsk'
             },
             {
                name: 'Rödlök',
                quantityFive: 0.5,
                quantity: 0.5,
                unit: 'st'
             },
             {
                name: 'Fetaost',
                quantityFive: 125,
                quantity: 125,
                unit: 'g'
             },
             {
                name: 'Klippt persilja',
                quantityFive: 1,
                quantity: 1,
                unit: 'msk'
             },
             {
                name: 'Potatisar',
                quantityFive: 4,
                quantity: 4,
                unit: 'st'
             },
             {
                name: 'Rött äpple',
                quantityFive: 0.5,
                quantity: 0.5,
                unit: 'st'
             },
             {
                name: 'Salt',
                quantityFive: 1,
                quantity: 1,
                unit: '',
                textOnly: true,
             },
             {
                name: 'Peppar',
                quantityFive: 1,
                quantity: 1,
                unit: '',
                textOnly: true,
             }],
        	 image: 'https://www.landleyskok.se/wp-content/uploads/2012/04/valborgssill_IMG_9746.jpg',
        	 description: 'Jättesmarrig sill som smakar rökigt',
        	 rating: [1,2,3,4,5],
        	 howToMake: ''
        },
        {
        	 name: 'Wasabisill',
        	 ingredients: [
        	 {
        	 	name: 'Sill',
        	 	quantityFive: 420,
        	 	quantity: 420,
        	 	unit: 'g'
        	 },
         	 {
        	 	name: 'Wasabi',
        	 	quantityFive: 50,
        	 	quantity: 50,
        	 	unit: 'g'
        	 },
             {
                name: 'Hårdkokt ägg',
                quantityFive: 1,
                quantity: 1,
                unit: 'st'
             },
             {
                name: 'Creme fraiche',
                quantityFive: 2,
                quantity: 2,
                unit: 'dl'
             },
             {
                name: 'Majonnäs',
                quantityFive: 1,
                quantity: 1,
                unit: 'msk'
             },
             {
                name: 'Dill',
                quantityFive: 2,
                quantity: 2,
                unit: 'msk'
             },
             {
                name: 'Gräslök',
                quantityFive: 2,
                quantity: 2,
                unit: 'msk'
             }
        	 ],
        	 image: 'http://4.bp.blogspot.com/-23gydZUgODE/VIYULkn7mVI/AAAAAAAABpg/a23VsIIqsUA/s1600/26.jpg',
        	 description: 'Här är ett recept som chefen på mitt förra jobb kom på som en variant på min skärgårdssill med ägg. En blandning av det svenskaste vi har (inlagd sill) med influenser utifrån. Gjorde succé på årets midsommarfirande, men funkar lika bra till jul.',
        	 rating: [1,2,3,4,5],
        	 howToMake: ''
        },
        {
        	 name: 'Fänkål, gurka, rödlök och dragon-sill',
        	 ingredients: [
             {
        	 	name: 'Sill',
        	 	quantityFive: 420,
        	 	quantity: 420,
        	 	unit: 'g'
        	 },
             {
                name: 'Ättiksprit (12%)',
                quantityFive: 0.5,
                quantity: 0.5,
                unit: 'dl'
             },
             {
                name: 'Strösocker',
                quantityFive: 1,
                quantity: 1,
                unit: 'dl'
             },
             {
                name: 'Vatten',
                quantityFive: 11.5,
                quantity: 11.5,
                unit: 'dl'
             },
             {
                name: 'liten fänkol',
                quantityFive: 0.5,
                quantity: 0.5,
                unit: 'st'
             },
             {
                name: 'Gurka',
                quantityFive: 0.3,
                quantity: 0.3,
                unit: 'st'
             },
             {
                name: 'Rödlök',
                quantityFive: 1,
                quantity: 1,
                unit: 'st'
             },
             {
                name: 'Krukor dragon',
                quantityFive: 1,
                quantity: 1,
                unit: 'st'
             }],
        	 image: 'http://www.ica.se/imagevaultfiles/id_120286/cf_1286/klar-sill-med-fankal-gurka-rodlok-dragon-718808.jpg',
        	 description: 'Det kan aldrig bli för mycket sill till midsommar! Den här sillen har fått sällskap av fänkål, gurka, rödlök och dragon. Låt stå i kylskåp minst två dygn så har du en fantastisk inlagt sill. Enkelt och gott!',
        	 rating: [1,2,3,4,0],
        	 howToMake: ''
        }];


        $scope.updateQuantity = function(numberOfPortions){
            $scope.numberOfPortions = numberOfPortions;

            angular.forEach($scope.sills, function(sill) {
                angular.forEach(sill.ingredients, function(ingredient) {
                    
                    var qty = ingredient.quantityFive / 5 * numberOfPortions;

                    if(Math.round(qty) !== qty) {
                        qty = qty.toFixed(1);
                    }

                    ingredient.quantity = qty;
                });
            });
        }

        $scope.updateQuantity($scope.numberOfPortions);
  });
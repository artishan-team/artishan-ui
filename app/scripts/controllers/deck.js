'use strict';

/**
 * @ngdoc function
 * @name artishanApp.controller:DeckCtrl
 * @description
 * # DeckCtrl
 * Controller of the artishanApp
 */
angular.module('artishanApp')
  .controller('DeckCtrl', function ($rootScope, $scope) {
    $rootScope.subNav = 'views/_navbar/deck.html';
    $scope.myData = [
        {
            'firstName': 'Cox',
            'lastName': 'Carney',
            'company': 'Enormo',
            'employed': true
        },
        {
            'firstName': 'Lorraine',
            'lastName': 'Wise',
            'company': 'Comveyer',
            'employed': false
        },
        {
            'firstName': 'Nancy',
            'lastName': 'Waters',
            'company': 'Fuelton',
            'employed': false
        }
      ];
  });

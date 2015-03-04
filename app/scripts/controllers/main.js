'use strict';

/**
 * @ngdoc function
 * @name artishanUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the artishanUiApp
 */
angular.module('artishanApp')
  .controller('MainCtrl', [
    '$rootScope',
    '$scope',
    'artishanApi.deck',
    function ($rootScope, $scope, Deck) {
    $rootScope.subNav = false;
    var deckList = Deck.deckList();


    $scope.test = deckList;
    console.log(deckList);
    console.log(Deck.deckList({
      deckId:'54dee2fd467dc0152156eccd'
    }));
    console.log(Deck.deckList({
      deckId:'54dee2fd467dc0152156eccd',
      action: 'slide'
    }));
    $scope.slides = [
      {
        image: 'images/artishan.png',
        text: 'Artishan UI 1'
      },
      {
        image: 'images/artishan.png',
        text: 'Artishan UI 2'
      },
      {
        image: 'images/artishan.png',
        text: 'Artishan UI 3'
      }
    ];

  }]);

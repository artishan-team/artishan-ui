'use strict';

/**
 * @ngdoc function
 * @name artishanApp.controller:DeckCtrl
 * @description
 * # DeckCtrl
 * Controller of the artishanApp
 */
angular.module('artishanApp')
  .controller('DeckCtrl', [
    '$rootScope',
    '$scope',
    'artishanApi.deck',
    function ($rootScope, $scope, Deck) {

      $rootScope.subNav = 'views/_navbar/deck.html';
      $scope.gridOptions = {
        enableSorting: true,
        columnDefs: [
          { name:'Created', field: 'meta.created' },
          { name:'Title', field: 'title' },
          { name:'Description', field: 'meta.description' },
          { name:'Meta', field: 'meta' },
          { name: '-', field: '_id', cellTemplate:'<a class="btn primary" href="#/deck/{{ row.entity[col.field] }}/edit">Edit</a>'},
          { name: 'showItem', field: '_id', cellTemplate:'<a class="btn primary" href="#/deck/{{ row.entity[col.field] }}/slideshow">Show</a>'}
        ],
        data : Deck.deckList()
      };
      $scope.data = [
        '<h1>Angular-bespoke</h1>',
        '<h2><a href="#">slide2</a></h2>',
        '<h3>slide3</h3>',
        '<h2 class="single-words">Single words</h2>',
        '<ul><li>list1</li><li>list2</li><li>list3</li></ul>',
      ];
    }]);

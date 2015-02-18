'use strict';

/**
 * @ngdoc function
 * @name artishanUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the artishanUiApp
 */
angular.module('artishanApp')
  .controller('MainCtrl', function ($rootScope, $scope) {
    $rootScope.subNav = false;
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

  });

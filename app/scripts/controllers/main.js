'use strict';

/**
 * @ngdoc function
 * @name artishanUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the artishanUiApp
 */
angular.module('artishanUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

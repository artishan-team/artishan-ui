'use strict';

/**
 * @ngdoc function
 * @name artishanApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the artishanApp
 */
angular.module('artishanApp')
  .controller('TestCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

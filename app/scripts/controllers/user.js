'use strict';

/**
 * @ngdoc function
 * @name artishanApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the artishanApp
 */
angular.module('artishanApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

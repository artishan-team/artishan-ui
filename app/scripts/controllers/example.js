'use strict';

/**
 * @ngdoc function
 * @name artishanApp.controller:ExampleCtrl
 * @description
 * # ExampleCtrl
 * Controller of the artishanApp
 */
angular.module('artishanApp')
  .controller('ExampleCtrl', function ($rootScope, $scope, $routeParams) {
    $rootScope.subNav = 'views/_navbar/example.html';
    $scope.subView = 'views/example/' + $routeParams.view + '.html';
  });

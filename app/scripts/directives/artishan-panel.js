'use strict';

/**
 * @ngdoc directive
 * @name artishanApp.directive:artishanPanel
 * @description
 * # artishanPanel
 */
angular.module('artishanApp')
  .directive('artishanPanel', function () {
    return {
      templateUrl: 'templates/angular-panel/default.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.body = "Hello<p>test</p>";
        scope.title = "타이틀 ";
      }
    };
  });

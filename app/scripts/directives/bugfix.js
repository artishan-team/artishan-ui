'use strict';

/**
 * @ngdoc directive
 * @name artishanApp.directive:artishanNav
 * @description
 * # artishanNav
 */
angular.module('artishanApp')
.directive('disableNgAnimate', ['$animate',
    function ($animate) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                $animate.enabled(false, element);
            }
        };
}]);

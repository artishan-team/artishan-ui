'use strict';

/**
 * @ngdoc directive
 * @name artishanApp.directive:artishanNav
 * @description
 * # artishanNav
 */
angular.module('artishanApp')
.provider('$nav', function() {

  var defaults = this.defaults = {
    activeClass: 'active',
    routeAttr: 'data-match-route',
    strict: false
  };

  this.$get = function() {
    return {defaults: defaults};
  };

})
.directive('artishanNav', function ($window, $location, $nav) {

  var defaults = $nav.defaults;

  return {
    restrict: 'EA',
    // templateUrl: 'views/navbar.html',
    link: function postLink(scope, element, attr, controller) {

      var self = element;
      element.addClass('showHalfMenu');
      element.bind('click', function () {
        self.removeClass('showFullMenu');
        self.addClass('showHalfMenu');
      });
      element.bind('mouseover', function () {
        self.removeClass('showHalfMenu');
        self.addClass('showFullMenu');
      });
      element.bind('mouseout', function () {
        self.removeClass('showFullMenu');
        self.addClass('showHalfMenu');
      });

      // Directive options
       var options = angular.copy(defaults);
       angular.forEach(Object.keys(defaults), function(key) {
         if(angular.isDefined(attr[key])) options[key] = attr[key];
       });

       // Watch for the $location
       scope.$watch(function() {

         return $location.path();

       }, function(newValue, oldValue) {

         var liElements = element[0].querySelectorAll('li[' + options.routeAttr + ']');

         angular.forEach(liElements, function(li) {

           var liElement = angular.element(li);
           var pattern = liElement.attr(options.routeAttr).replace('/', '\\/');
           if(options.strict) {
             pattern = '^' + pattern + '$';
           }
           var regexp = new RegExp(pattern, ['i']);

           if(regexp.test(newValue)) {
             liElement.addClass(options.activeClass);
           } else {
             liElement.removeClass(options.activeClass);
           }

         });

       });
    }
  };
});

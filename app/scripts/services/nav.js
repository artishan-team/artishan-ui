'use strict';

/**
 * @ngdoc service
 * @name artishanApp.nav
 * @description
 * # nav
 * Factory in the artishanApp.
 */
angular.module('artishanApp')
  .factory('$nav', function ($modal) {

    var defaults = this.defaults = {
      placement: 'left'
    };

    var asideFactory = {
      // override open method
      open: function(config) {
        var options = angular.extend({}, defaults, config);
        // check placement is set correct
        if(['left', 'right', 'bottom', 'top'].indexOf(options.placement) === -1) {
          options.placement = defaults.placement;
        }
        var vertHoriz = ['left', 'right'].indexOf(options.placement) === -1 ? 'vertical' : 'horizontal';
        // set aside classes
        options.windowClass  = 'ng-aside ' + vertHoriz + ' ' + options.placement + (options.windowClass ? ' ' + options.windowClass : '');
        delete options.placement;
        return $modal.open(options);
      }
    };

    // create $aside as extended $modal
    var $nav = angular.extend({}, $modal, asideFactory);
    return $nav;

  });

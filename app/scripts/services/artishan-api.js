'use strict';

/**
 * @ngdoc service
 * @name artishanApp.artishanApi
 * @description
 * # api
 * Provider in the artishanApp.
 */
angular.module('artishanApp')
  .constant('config.artishanApi', {
    apiHost: './',
    requireAuth: true
  })
  .provider('$api', ['config.artishanApi', function(config) {

    Object.defineProperties(this, {
      apiHost: {
        get: function() { return config.apiHost; },
        set: function(value) { config.apiHost = value; }
      },
      requireAuth: {
        get: function() { return config.requireAuth; },
        set: function(value) { config.requireAuth = value; }
      }
    });

    this.$get = [
      'artishanApi.deck',
      'artishanApi.user',
      function(deck, user) {
        var $api = {};
        $api.getList = function() {
          return deck.getList();
        };
        return $api;
    }];

  }])
  .factory('artishanApi.deck', [
    '$window',
    '$location',
    '$resource',
    'config.artishanApi',
    function($window, $location, $resource, config) {

      var deck = $resource(
        config.apiHost + '/deck/:deckId/:action/:slideId',
        {
          deckId: '@deckId',
          action: '@action',
          slideId: '@slideId'
        },
        {
          deckCreate: {
              method: 'PUT',
              params: {
                  listController: 'clear-all'
              }
          },
          deckList: {
              method: 'GET',
              isArray: true
          }
        }
      );

      // deck.query();
      // deck.clear();
      // deck.get({
      //   id: 4
      // });
      // deck.archive({
      //   id: 8
      // });
      return deck;
    }
  ])
  .factory('artishanApi.user', [
    '$q',
    '$window',
    '$location',
    'artishanApi.config',
    function($q, $window, $location, config) {
      console.log('user');
    }
  ]);

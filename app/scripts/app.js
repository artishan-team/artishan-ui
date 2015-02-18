'use strict';

/**
 * @ngdoc overview
 * @name artishanUiApp
 * @description
 * # artishanUiApp
 *
 * Main module of the application.
 */
angular
  .module('artishanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js',
    'ui.bootstrap',
    'ui.grid',
    'satellizer'
  ])
  .config(function ($routeProvider, $authProvider) {

    var authenticated = function ($q, $location, $auth) {
      var deferred = $q.defer();
      if (!$auth.isAuthenticated()) {
        $location.search('login', false);
      } else {
        $location.search('login', null);
        deferred.resolve();
      }
      return deferred.promise;
    };

    $authProvider.loginUrl = 'http://localhost:3000/auth/login';
    $authProvider.tokenName = 'accessToken';

    $routeProvider
      .when('/', {
        redirectTo: '/main'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        navTemplateUrl: 'views/tempaltes/nav_main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        resolve: {
          authenticated: authenticated
        }
      })
      .when('/example', {
        redirectTo: '/example/main'
      })
      .when('/example/main', {
        templateUrl: 'views/example/main.html',
        controller: 'ExampleCtrl'
      })
      .when('/example/icon', {
        templateUrl: 'views/example/icon.html',
        controller: 'ExampleCtrl'
      })
      .when('/example/panel', {
        templateUrl: 'views/example/panel.html',
        controller: 'ExampleCtrl'
      })
      .when('/deck', {
        redirectTo: '/deck/main'
      })
      .when('/deck/main', {
        templateUrl: 'views/deck/main.html',
        controller: 'DeckCtrl'
      })
      .when('/deck/list', {
        templateUrl: 'views/deck/list.html',
        controller: 'DeckCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

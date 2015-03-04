'use strict';

/**
 * @ngdoc function
 * @name artishanApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the artishanApp
 */
angular.module('artishanApp')
  .controller('SignupCtrl', function ($scope, $modalInstance, $auth, $location) {

    $scope.signup = function(){
      $auth.signup({
        name: $scope.name,
        email: $scope.email,
        password: $scope.password
      })
      .then(function() {
        console.log({
          content: 'You have successfully sing up'
        });
        $modalInstance.dismiss('cancel');
      })
      .catch(function(response) {
        console.log({
          content: response.data.message
        });
      });
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });

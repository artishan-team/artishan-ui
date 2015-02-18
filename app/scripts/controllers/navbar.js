'use strict';

/**
 * @ngdoc function
 * @name artishanUiApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the artishanUiApp
 */
angular.module('artishanApp')
.controller('NavbarCtrl', function ($scope, $route, $modal, $location) {

  $scope.$on('$locationChangeSuccess', function(){
    console.log($location.search());
    if($location.search().login === 'false') {
      $scope.login();
    }
  });

  $scope.login = function () {
    var loginModal = $modal.open({
      templateUrl: 'views/_modal/login.html',
      controller: 'LoginCtrl',
      size: 'sm',
      backdrop: true,
      resolve: {
        items: function () {
          console.log('items');
          return $scope.items;
        }
      }
    });
    loginModal.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };
});

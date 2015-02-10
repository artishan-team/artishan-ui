'use strict';

/**
 * @ngdoc function
 * @name artishanUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the artishanUiApp
 */
angular.module('artishanApp')
.controller('AboutCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };

  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }

  $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.myData = [
      {
          'firstName': 'Cox',
          'lastName': 'Carney',
          'company': 'Enormo',
          'employed': true
      },
      {
          'firstName': 'Lorraine',
          'lastName': 'Wise',
          'company': 'Comveyer',
          'employed': false
      },
      {
          'firstName': 'Nancy',
          'lastName': 'Waters',
          'company': 'Fuelton',
          'employed': false
      }
    ];
});

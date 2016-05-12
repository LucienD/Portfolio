//------------------------------------------------------Controller Page Game
angular.module('Portfolio').controller('ElementsGameCtrl', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-principal content-game';
    $rootScope.page = 'game';
    $scope.title = 'Game';
  }
]);

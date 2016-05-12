//--------------------------Controller page Village
angular.module('Portfolio').controller('ElementsVillageCtrl', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-principal content-village';
    $rootScope.page = 'village';
    $scope.contents = [{
      name: "Voir Projets",
      url: 'templates/content/village/element_travaux.svg',
      duration: '35s',
      link: '#/projets',
      delay: '0s',
      color: "#04375F",
      text: "</>"
    }, {
      name: "Voir Projets",
      url: 'templates/content/village/element_travaux.svg',
      duration: '55s',
      link: '#/projets',
      delay: '2s',
      color: "#FF3B3B",
      text: "</>"
    }];
    $scope.title = 'Projets';
    $scope.titleOver = function(content, title) {
      $scope.title = content.name;
    };
    $scope.titleLeave = function(title) {
      $scope.title = 'Projets';
    };
  }
]);

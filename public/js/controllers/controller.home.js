//---------------------------------------------------------Controller Homepage
angular.module('Portfolio').controller('mainController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-principal content-home';
    $scope.title = 'Bienvenue';
    $rootScope.page = 'home';

    $scope.contents = [{
      name: 'Game',
      titleOver: "title = 'Game'",
      link: 'game',
      url: 'templates/content/homepage/elmtGame.svg'
    }, {
      name: 'Presentation',
      titleOver: "title = 'Presentation'",
      link: 'presentation',
      url: 'templates/content/homepage/elmtPresentation.svg'
    }, {
      name: 'Village',
      titleOver: "title = 'Village'",
      link: 'village',
      url: 'templates/content/homepage/elmtVillage.svg'
    }, {
      name: 'Contact',
      titleOver: "title = 'Contact'",
      link: 'contact',
      url: 'templates/content/homepage/elmtContact.svg'
    }];
    $scope.titleOver = function(content, title) {
      $scope.title = content.name;
    };
    $scope.titleLeave = function(title) {
      $scope.title = 'Bienvenue';
    };
  }
]);

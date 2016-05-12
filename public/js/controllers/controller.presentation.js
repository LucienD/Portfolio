//------------------------------------------Controller page Presentation
angular.module('Portfolio').controller('ElementsPresentationCtrl', ['$scope', '$rootScope', 'blocQuetza',
  function($scope, $rootScope, blocQuetza) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-principal content-presentation';
    $rootScope.page = 'presentation';
    $scope.title = 'Presentation';
    $scope.contents = [{
      url: 'templates/content/presentation/quetza.svg',
      name: 'Huahuazoa'
    }];
    $scope.blocs = blocQuetza.getBlocs();

    $scope.titleOverMoi = function(title, contents) {
      $scope.title = contents[0].name;
    };
    $scope.titleLeave = function(title) {
      $scope.title = 'Presentation';
    };

  }
]);

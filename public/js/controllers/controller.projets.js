angular.module('Portfolio').controller('PageProductCtrl', ['$scope', '$timeout', '$anchorScroll', '$rootScope', 'ProjetService',
  function ($scope, $timeout, $anchorScroll, $rootScope, ProjetService) {
        $scope.pageClass = 'page-projets';
        $scope.title = 'Projets';

        $timeout(function () {
            ion.sound.play("boum");
        }, 2000);

        ProjetService.getProjets().then(function (req, res) {
            $scope.cards = req.data;
        });

  }
]);

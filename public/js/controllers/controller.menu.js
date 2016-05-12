//----------------------------------------------------Controller Menu page
angular.module('Portfolio').controller('menuNavCtrl', ['$scope', '$rootScope', 'menuContent',
  function($scope, $rootScope, menuContent) {
    $rootScope.contents = menuContent.getMenuContents();
    $rootScope.isActive = false;
    $rootScope.Active = false;

    $rootScope.showMenu = function() {
      $rootScope.isActive = !$rootScope.isActive;
      ion.sound.play("water_droplet_3");
    };

    $rootScope.muteSound = function() {
      $rootScope.Active = !$rootScope.Active;
      $rootScope.isSound = !$rootScope.isSound;
      if ($rootScope.isSound === true) {
        ion.sound.pause();
      } else {
        ion.sound.play("magic");
      }
    };
  }
]);

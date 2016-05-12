var Portfolio = angular.module('Portfolio', ['ui.router', 'ngAnimate', 'ngMaterial', 'chart.js']);
Portfolio.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home-page.html',
      controller: 'mainController'
    })
    .state('game', {
      url: '/game',
      templateUrl: 'templates/page-game.html',
      controller: 'ElementsGameCtrl'
    })
    .state('presentation', {
      url: '/presentation',
      templateUrl: 'templates/page-presentation.html',
      controller: 'ElementsPresentationCtrl'
    })
    .state('village', {
      url: '/village',
      templateUrl: 'templates/page-village.html',
      controller: 'ElementsVillageCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/page-contact.html',
      controller: 'ElementsContactCtrl'
    })
    .state('projets', {
      url: '/projets',
      templateUrl: 'templates/page-projet.html',
      controller: 'PageProductCtrl'
    })
    .state('me', {
      url: '/me',
      templateUrl: 'templates/page-about.html',
      controller: 'ElementsMeCtrl'
    });

});
//------------------------------------------------------------Sound effects

ion.sound({
  sounds: [{
    name: "water_droplet_3",
    volume: .1,
    multiplay: true
  }, {
    name: "magic",
    multiplay: true,
    preload: false
  },
{
  name: "boum",
  volume: 1,
  multiplay: true
}],
  path: "sounds/",
  multiplay: false,
  preload: true,
  volume: 0.3
});
ion.sound.play("magic");

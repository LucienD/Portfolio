//-----------------------------------Service Menu Bar

Portfolio.factory('menuContent', function() {
  var menuBar = {
    contents: [{
      url: 'element_menu/button-menu-home.svg',
      link: 'home',
      titlepage: 'Bienvenue'
    }, {
      url: 'element_menu/button-menu-game.svg',
      link: 'game',
      titlepage: 'Game'
    }, {
      url: 'element_menu/button-menu-presentation.svg',
      link: 'presentation',
      titlepage: 'Presentation'
    }, {
      url: 'element_menu/button-menu-projet.svg',
      link: 'village',
      titlepage: 'Village'
    }, {
      url: 'element_menu/button-menu-contact.svg',
      link: 'contact',
      titlepage: 'Contact'
    }],
    getMenuContents: function() {
      return menuBar.contents;
    }
  };
  return menuBar;
});


Portfolio.factory('projetType', function() {

});

//--------------------------------------------------------------------------------------------
//--------------------------------------------------PAGE PRESENTATION

//--------------------------------------------Service Bloc Quetza
Portfolio.factory('blocQuetza', function() {
  var blocQuetza = {
    contents: [{
      id: 'bloc1',
      link: '#bloc1',
      begin: '0.9s'
    }, {
      id: 'bloc2',
      link: '#bloc2',
      begin: '1.8s'
    }, {
      id: 'bloc3',
      link: '#bloc3',
      begin: '2.7s'
    }, {
      id: 'bloc4',
      link: '#bloc4',
      begin: '3.6s'
    }, {
      id: 'bloc5',
      link: '#bloc5',
      begin: '4.5s'
    }, {
      id: 'bloc6',
      link: '#bloc6',
      begin: '5.4s'
    }, {
      id: 'bloc7',
      link: '#bloc7',
      begin: '6.3s'
    }, {
      id: 'bloc8',
      link: '#bloc8',
      begin: '7.2s'
    }, {
      id: 'bloc9',
      link: '#bloc9',
      begin: '8.1s'
    }, {
      id: 'bloc10',
      link: '#bloc10',
      begin: '9.0s'
    }],
    getBlocs: function() {
      return blocQuetza.contents;
    }
  };
  return blocQuetza;
});



//---------------------------------------------Service L'entourage
Portfolio.factory('Entourage', function() {
  var icoEntourage = {
    contents: [{
      url: 'templates/content/about/max.svg',
      link: 'http://maxime.fr'
    }, {
      url: 'templates/content/about/nono.svg',
      link: 'http://www.alakazam.site'
    }, {
      url: 'templates/content/about/jacker.svg',
      link: 'http://jackermag.com'
    }],
    getIconEntourage: function() {
      return icoEntourage.contents;
    }
  };
  return icoEntourage;

});

//Service Outils developpement
Portfolio.factory('PostTool', function() {
  var dataTool = {
    tools: [{
      data: ["65", "35"],
      labels: ["javascript", "En cours.."],
      colours: ["#FFEC66", "#f7f7f7"]
    }, {
      data: ["80", "20"],
      labels: ["html", "En cours.."],
      colours: ["#EDA57B", "#f7f7f7"]
    }, {
      data: ["80", "20"],
      labels: ["css", "En cours.."],
      colours: ["#79B1CA", "#f7f7f7"]
    }, {
      data: ["50", "50"],
      labels: ["php", "En cours.."],
      colours: ["#628888", "#f7f7f7"]
    }],
    getPosts: function() {
      return dataTool.tools;
    },
    getPost: function(id) {
      return dataTool.tools[0];
    }
  };
  return dataTool;

});




Portfolio.service('MailService', ["$http", function(request) {
  this.sendMail = function (mail) {
    return request.post('/mail/send', mail);
  };
}]);

Portfolio.service('ProjetService', ["$http", function($http){
    this.getProjets = function(projet){
        return $http.get('/projet', projet);
    };
}]);



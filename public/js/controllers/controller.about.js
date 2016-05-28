angular.module('Portfolio').controller('ElementsMeCtrl', ['$scope', '$rootScope', 'EntourageService', 'PostTool', '$animate',
  function($scope, $rootScope, EntourageService, PostTool, $animate) {
    $rootScope.isActive = false;
    $scope.pageClass = 'page-presentation content-me';
    $rootScope.page = 'elm-presentation me';

    $scope.json = {
      devs: PostTool.getPosts()
    };

    $scope.legend = true;
    $scope.options = {
      segmentShowStroke: false,
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
      animationEasing: "ease",
      animateScale: true,
      animationSteps: 60
    };

    $scope.copains = EntourageService.getEntourage();
  }
]);

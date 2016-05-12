//--------------------------Controller Page Contact

angular.module('Portfolio').controller('ElementsContactCtrl', ['$scope', '$http', '$rootScope', '$animate', 'MailService',
 function ($scope, $http, $rootScope, $animate, Mailer) {

        $rootScope.isActive = false;
        $scope.pageClass = 'page-principal content-contact';
        $rootScope.page = 'contact';
        $scope.title = 'Contact';


        $scope.mail = {
            from: "",
            text: "",
            name: "",
            phone: ""
        };
        $scope.send = function () {

            Mailer.sendMail($scope.mail).then(function (res) {
                console.log(res);
            });
        }

 }]);

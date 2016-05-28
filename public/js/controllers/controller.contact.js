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
            name: ""
        };

        $scope.send = function () {

            if ($scope.mail.from != "" && $scope.mail.text != "" && $scope.mail.name != "") {
                Mailer.sendMail($scope.mail).then(function (res) {
                    console.log(res);
                });
            }else{
             alert("Tu n'as pas tout rempli !");   
            }

        }

 }]);

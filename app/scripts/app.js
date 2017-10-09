(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
        }


    function KamiChatCookies($cookies, $uibModal) {
            var currentUser = $cookies.get('kamiChatCurrentUser');
            if (!currentUser || currentUser === '') {
                var modalInstance = $uibModal.open({
                    templateUrl: "/templates/username-modal.html",
                    size: 'lg',
                    controller: 'UsernameModalCtrl as usernamemodal',
                    backdrop:true,
                    keyboard: false
                });

                modalInstance.result.then(function(username){
                    console.log("1");
                    this.username = username;
                    console.log("2");
                    $cookies.put('kamiChatCurrentUser', this.username);
                    console.log("3");
                    var currentUser = $cookies.get('kamiChatCurrentUser');
                    console.log("Welcome, "+ currentUser);
                });

            }
        }

     angular
         .module('kamiChat', ['ngCookies','ui.router', 'ui.bootstrap','firebase'])
         .config(config)
         .run(['$cookies', '$uibModal', KamiChatCookies]);
 })();

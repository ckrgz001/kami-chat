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
                    this.username = username;
                    $cookies.put('kamiChatCurrentUser', this.username);
                    var currentUser = $cookies.get(kamiChatCurrentUser);
                    console.log("Welcome, "+ currentUser);
                });
            }
    }

     angular
         .module('kamiChat', ['ui.router', 'ui.bootstrap','firebase', 'ngCookies'])
         .config(config)
         .run(['$cookies', '$uibModal', KamiChatCookies]);
 })();

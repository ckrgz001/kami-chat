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
                $uibModal.open({
          // Modal configuration object properties
        })
      }
    }

     angular
         .module('kamiChat', ['ui.router', 'ui.bootstrap','firebase', 'ngCookies'])
         .config(config)
         .run(['$cookies', '$uibModal', KamiChatCookies]);
 })();

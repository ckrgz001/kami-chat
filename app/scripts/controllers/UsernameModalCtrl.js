(function() {
    function UsernameModalCtrl($uibModalInstance) {


        this.closeModal = function(username) {
            $uibModalInstance.close(username);
        };

    }
    angular
        .module('kamiChat')
        .controller('UsernameModalCtrl', ['$uibModalInstance', UsernameModalCtrl]);
})();

(function() {
    function UsernameModalCtrl($uibModalInstance) {


        this.closeModal = function(username) {
            $uibModalInstance.close(username);
        };

        this.dismissModal = function() {

            $uibModalInstance.dismiss();
        };

    }
    angular
        .module('kamiChat')
        .controller('UsernameModalCtrl', ['$uibModalInstance', UsernameModalCtrl]);
})();

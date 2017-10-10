(function() {
    function UsernameModalCtrl($uibModalInstance) {
        this.username = ' ';

        this.closeModal = function(isValid) {
            if (isValid){
            $uibModalInstance.close(this.username);

            }
        };

        this.dismissModal = function() {

            $uibModalInstance.dismiss();
        };

    }
    angular
        .module('kamiChat')
        .controller('UsernameModalCtrl', ['$uibModalInstance', UsernameModalCtrl]);
})();

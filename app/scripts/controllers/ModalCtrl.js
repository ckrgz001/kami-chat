(function() {
    function ModalCtrl(Room, $uibModalInstance) {


        this.closeModal = function(newRoomName) {
            $uibModalInstance.close(newRoomName);
        };

        this.dismissModal = function() {

            $uibModalInstance.dismiss();
        }
    }
    angular
        .module('kamiChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();

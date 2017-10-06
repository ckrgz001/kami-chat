(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.rooms = Room.all;

        this.openRoomModal = function(){
            var modalInstance = $uibModal.open({
                templateUrl: "/templates/modal-room.html",
                size: 'lg',
                controller: 'ModalCtrl as modal',
                backdrop:true,
            });

            modalInstance.result.then(function(newRoomName){
                Room.add(newRoomName);
            })
        };

        this.activeRoom = function(room){
            this.activeRoomMessage = Message.getByRoomId(room.$id);
            console.log("The active room is" + room.$id);
        };

    };

    angular
        .module('kamiChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();

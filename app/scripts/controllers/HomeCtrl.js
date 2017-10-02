(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.rooms = Room.all;

        this.activeRoom = null;

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
            this.activeRoom = room;
            console.log(room + "is now the active room");
        };

        this.message = Message.all;
    };

    angular
        .module('kamiChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();

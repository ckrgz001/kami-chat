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
                console.log("hello");
            })
        };

        this.activeRoom = function(room){
            alert("What's up?");
        }
    };

    angular
        .module('kamiChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();

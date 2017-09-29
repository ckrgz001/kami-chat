(function() {
    function HomeCtrl(Room,$uibModal) {
        this.rooms = Room.all;


        this.openRoomModal = function(){
            var modalInstance = $uibModal.open({
                templateUrl: "/templates/roommodal.html",
                size: 'lg',
                controller: 'ModalCtrl as modal',
                backdrop:true,
            });

            modalInstance.result.then(function(newRoomName){
                Room.add(newRoomName);
                console.log("hello");
            })
        };
    };

    angular
        .module('kamiChat')
        .controller('HomeCtrl', ['$uibModal','Room', HomeCtrl]);
})();

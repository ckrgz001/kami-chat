(function() {
    function HomeCtrl(Room,$uibModal) {
        this.rooms = Room.all;
        this.room = 'stressroom';
        this.add = function(){
            Room.add(this.room);
            console.log("homectrl");
        }


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

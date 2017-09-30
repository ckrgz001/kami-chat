(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.add = function (roomName){
            Room.add(roomName);
            console.log("HomeCtrl represent!");
        };
    }

    angular
        .module('kamiChat')
        .controller('HomeCtrl', ['Room',HomeCtrl]);
})();

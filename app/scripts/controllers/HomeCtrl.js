(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.add = function (){
            Room.add("To listen to me whine?");
            console.log("HomeCtrl represent!");
        };
    }

    angular
        .module('kamiChat')
        .controller('HomeCtrl', ['Room',HomeCtrl]);
})();

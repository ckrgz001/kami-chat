(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
    }

    angular
        .module('kamiChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

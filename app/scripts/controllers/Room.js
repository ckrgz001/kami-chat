(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function (roomName){
        console.log("room.add");
        rooms.$add({
            room:roomName
        });
    };

    return Room;
  }

  angular
    .module('kamiChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

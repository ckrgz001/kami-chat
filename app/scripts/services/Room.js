(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(roomName){
        rooms.$add (roomName);
        console.log ("Room.js")

    }

    return Room;
  }

  angular
    .module('kamiChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

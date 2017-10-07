(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        console.log("The active room is" + roomId);
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    }


    return Message
};


  angular
    .module('kamiChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

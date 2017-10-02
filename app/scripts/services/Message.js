(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        var roomMessages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
          return roomMessages;
          console.log("message?");

    }

    return Message;

};

  angular
    .module('kamiChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

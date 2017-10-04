(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    console.log("Message Service");
    console.log(messages);

    Message.getByRoomId = function(roomId) {Í
      console.log(roomId);
      var results = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      console.log(results);
      return results;
    };
    return Message;
  }
  angular
    .module('kamiChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

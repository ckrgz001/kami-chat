(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        console.log("The active room is" + roomId);
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    };

    Message.send = function(newMessage, roomId) {
        console.log('part 1');
        messages.$add(newMessage); //'messages' is the var = firebasearray
        console.log('after');

    };


    return Message
}


  angular
    .module('kamiChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        console.log("The active room is" + roomId);
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    };

    Message.send = function(newMessage, activeRoom) {
        console.log('RoomId: ', activeRoom);

        messages.$add({
            content: newMessage,
            roomId: activeRoom.$id,
            roomName: activeRoom.$value,
            username: $cookies.get('kamiChatCurrentUser')

        });

    };


    return Message
}


  angular
    .module('kamiChat')
    .factory('Message', ['$firebaseArray', '$cookies','$filter', Message]);
})();

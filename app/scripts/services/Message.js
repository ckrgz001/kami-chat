(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {

      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    };

    Message.send = function(newMessage, activeRoom) {

        var date = new Date();

        messages.$add({
            content: newMessage,
            roomId: activeRoom.$id,
            roomName: activeRoom.$value,
            username: $cookies.get('kamiChatCurrentUser'),
            sentAt: $filter('date')(date, 'shortTime')

        });

    };


    return Message
}


  angular
    .module('kamiChat')
    .factory('Message', ['$firebaseArray', '$cookies','$filter', Message]);
})();

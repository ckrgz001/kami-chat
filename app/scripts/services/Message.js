(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      var results = $firebaseArray(ref);
      return results;
    };
    return Message;
  }
  angular
    .module('kamiChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

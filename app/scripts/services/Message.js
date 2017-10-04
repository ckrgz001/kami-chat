(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    console.log("Message Service");


    Message.getByRoomId = function(roomId) {
      console.log(roomId);
      var results = $firebaseArray(ref);
      console.log(results);
      return results;
    };
    return Message;
  }
  angular
    .module('kamiChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

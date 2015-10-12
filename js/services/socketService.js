app.factory('socket9', function(socketFactory) {
  var mis = io.connect('https://9billion.mybluemix.net/');
  // var mis = io.connect('http://localhost:1314/');

  mySocket = socketFactory({
    ioSocket : mis,
  });

  return mySocket;
});

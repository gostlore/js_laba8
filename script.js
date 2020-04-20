var express = require('express')();
var http = require('http').createServer(express);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

express.get('/', function(request, respons){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log("Cоединение");
	connection.push(socket);


    socket.on('chat message', function(msg){

    	io.emit('chat message', msg);
		console.log("Отключение");

  });

});


http.listen(port, function(){
  console.log('listening on *:' + port);
});
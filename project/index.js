var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));


app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});

io.on('connection', function(socket){
  console.log('New User Connected');
  socket.emit('connected','You have connected to server');
});

http.listen(6969, function(){
  console.log('Server started. Listening on *:6969');
});

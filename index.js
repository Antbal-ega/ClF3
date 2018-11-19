var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');
var port = 8080;
var sqlpass = "";
var dbc = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: sqlpass,
  database: "userAccounts"
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/homepage.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

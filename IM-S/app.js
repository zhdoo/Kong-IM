var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(13001);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/www/index.html');
});

var userList=[];

io.on('connection', function (socket) {
    console.log(socket.id+'登陆了！')
    socket.on('msg',function(e){
        console.log(e)
        if(e.toUserId){
            io.to(e.toUserId).emit('private msg', e)
        }else{

            io.sockets.emit('msg',e)
        }
    })

    socket.on('new user',function(e){
        e.userId=socket.id
        userList.push(e)
        io.sockets.emit('member list', userList);
        io.sockets.emit('login', e);//给指定的客户端发送消息
    })

    socket.on('disconnect', function(){
        console.log('connection is disconnect!');
    });

});

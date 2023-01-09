var socket = io();
listPlayers = [];
socket_is_online = false;


socket.on('ListPlayers',(data)=>{
    listPlayers = data;
})




socket.on('connect', function () {
    socket_is_online = true;
});

socket.on('disconnect', function () {
    socket_is_online = false;
});



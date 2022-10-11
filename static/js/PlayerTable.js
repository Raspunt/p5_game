

var app = new Vue({
    el: '#app',
    data: {
        listPlayers: [],
    },
    mounted() {
        socket.on('ListPlayers',(data)=>{
            this.listPlayers = data;




       


        })
    },
  
})

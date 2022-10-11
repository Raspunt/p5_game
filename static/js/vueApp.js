Vue.component("modal", {
    template: "#modal-template"
});

Vue.config.devtools = true

var app = new Vue({
    el: '#app',
    data: {
        listPlayers: [],
        showModal:false,
        username:"",
        email:"",
        password:"",
        passwordConfirm:""
    },
    mounted() {
        socket.on('ListPlayers',(data)=>{
            this.listPlayers = data;

        })
    },


    
  
})

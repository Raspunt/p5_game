


module.exports = class Router{


    constructor(app) {
        this.app = app
    }



    StartListen(){

        this.app.get('/', function (req, res) {  
            res.sendFile(__dirname+'/public/index.html');  
        });  

        this.app.get('/login', function (req, res) {  
            res.sendFile(__dirname+'/public/login.html');  
        });  

        

        


    }

      
      

}
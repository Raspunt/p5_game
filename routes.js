module.exports = class Router {
    
    constructor(app) {
        this.app = app
    }
    StartListen() {

        this.app.get('/', function (req, res) {
            res.sendFile(__dirname + '/public/index.html');
        });

        this.app.get('/Stats', function (req, res) {
            res.sendFile(__dirname + '/public/stats.html');
        });

        this.app.get('/Profile', function (req, res) {
            res.sendFile(__dirname + '/public/profile.html');
        });

    }
}
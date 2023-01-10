import { Server } from 'socket.io';
import { createServer } from 'http';

import  wsViews from './wsViews.js'
import { app } from '../web/apiRunner.js';
import config from '../../../config.js'



const server = createServer(app); 
export const io = new Server(server,{
    cors: {
        origin: `http://${config['HOST']}:${config['FRONTEND_PORT']}`,
    }
});


io.on('connection', client => {

    client.on('PlayerConnect',(data)=> wsViews.PlayerConnect(client,data));
    client.on('disconnect', (data) => wsViews.DisconectSocket(client,data));
    client.on('PlayerUpdate',(data) => wsViews.PlayerUpdate(client,data));



});


export function StartWsServer(){

    server.listen(config['config']['WS_SERVER_PORT'],()=>{
        console.log("socket.io server is ready ");
        console.log(`http://${config['config']['HOST']}:${config['config']['WS_SERVER_PORT']}`);
    });

}
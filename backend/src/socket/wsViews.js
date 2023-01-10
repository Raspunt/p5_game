import { PlayerModel } from "../db_redis/PlayerModel.js";
import { DbRedis } from "../db_redis/main.js";


export default class wsViews {


    static PlayerConnect(socket,data) {
        console.log(`player connected`);

        let player = new PlayerModel(
            socket.id,
            socket.handshake.address,
            data.username,
            data.pos
        )


        DbRedis.CreatePlayer(player)


    }

    static PlayerUpdate(socket,data){
        console.log('');
    }

    static DisconectSocket(socket,data) {
        console.log(data);
    }



}
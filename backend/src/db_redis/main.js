import { createClient } from 'redis';
// import { config } from '../../../config';


export class DbRedis{


    client = null;


    static ConectToDb() {

        this.client = createClient();
        this.client.connect();
        console.log("redis database is ready");
    }


    static GetPlayers(){
        return this.client.hGetAll('players'); 
    }

    static CreatePlayer(data){

        if (data === undefined){
            console.log("can't create player, no data");
            return
        }


        this.client.set('players',data);
    }












}
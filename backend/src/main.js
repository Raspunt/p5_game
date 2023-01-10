
import { StartWsServer } from "./socket/wsRunner.js";
import { DbRedis } from "./db_redis/main.js";




StartWsServer()
DbRedis.ConectToDb()


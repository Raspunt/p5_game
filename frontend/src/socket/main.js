import { io } from "socket.io-client";
import { config }  from '../../../config'


export const socket = io(`ws://${config['HOST']}:${config['WS_SERVER_PORT']}`)


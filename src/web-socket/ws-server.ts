import {createServer} from 'http';
import * as socketIo from 'socket.io';
import {WsMessage, WsMessageTypes} from "../utils/ws-messages/ws-message.interface";
import {messageHandler} from "./handlers/message-handler";
import * as express from "express";
import routes from "../routes";
import * as bodyParser from 'body-parser';

const app = new express();

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', routes) 

export const server = createServer(app);

const io = new socketIo.Server(server);

io.on('connection', socket => {
    socket.on('message', data => {
        try {
            const message: WsMessage = JSON.parse(data);
            messageHandler.emit(message.type, socket, message, io);
        } catch (e: unknown) {
            socket.send({
                type: WsMessageTypes.ErrorMessage,
                error: e
            })
        }
    })
})
import * as EventEmitter from 'events'
import {WsMessageTypes, WsSendMessage, WsSetNameMessage} from "../../utils/ws-messages/ws-message.interface";
import {Server, Socket} from "socket.io";

export const messageHandler = new EventEmitter();

messageHandler.on(WsMessageTypes.SetName, (socket: Socket ,message: WsSetNameMessage) : void => {
    const {name} = message;
    socket.data.name = name;
})

messageHandler.on(WsMessageTypes.SendMessage, (socket: Socket, message: WsSendMessage, io: Server) : void => {
    const {message: msg} = message;
    io.sockets.sockets.forEach(s => s.data.name === msg.recipient && s.send(message))
})
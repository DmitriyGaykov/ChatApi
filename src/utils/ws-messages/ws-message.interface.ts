import {Message} from "../../models/message";

export enum WsMessageTypes {
    SetName = 'SetName' ,
    SendMessage = 'SendMessage',
    ErrorMessage = 'ErrorMessage'
}

export interface WsMessage {
    type: WsMessageTypes;
}

export interface WsSetNameMessage extends WsMessage {
    name: string;
}

export interface  WsSendMessage extends WsMessage {
    message: Message;
}

export interface WsErrorMessage extends WsMessage {
    error: unknown;
}
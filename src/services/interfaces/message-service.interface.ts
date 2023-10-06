import {Message} from "../../models/message";

export interface IMessageService {
    addMessage(message : Message) : void;
    getMessages() : Message[];
}
import {IMessageService} from "./interfaces/message-service.interface";
import {Message} from "../models/message";
import {store} from "../data";

export class MessageService implements IMessageService {
    addMessage(message: Message): void {
        console.log(message)
        store.messages.push(message);
    }

    getMessages(): Message[] {
        return [...store.messages];
    }
}
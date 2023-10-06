import {Message} from "../models/message";

export interface Store {
    messages: Message[]
}

export const store : Store = {
    messages: []
}
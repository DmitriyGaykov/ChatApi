import {IMessageService} from "./../services";
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";

export class MessageController {
    constructor(
        private readonly messageService: IMessageService
    ) {}

    addMessage = (req: Request, res: Response) => {
        this.messageService.addMessage(req.body);
        return res.json();
    }

    getMessages = (req: Request, res: Response) => {
        const messages = this.messageService.getMessages();

        return messages.length === 0 ?
            res.status(StatusCodes.NO_CONTENT).json() :
            res.json(messages);
    }
}

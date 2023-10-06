import * as express from 'express';
import {MessageController} from "../controllers";
import {IMessageService, MessageService} from "../services";

const messageService: IMessageService = new MessageService();
const messageController: MessageController = new MessageController(messageService);

const routes = new express.Router();

routes.post('/messages', messageController.addMessage);
routes.get('/messages', messageController.getMessages);

export default routes;
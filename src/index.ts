import {server} from "./web-socket/ws-server";

const PORT : number = 3001;

export const start = async (server) : Promise<void> => {
    try {
        await server.listen(PORT);
        console.log('Server started on the port ' + PORT);
    } catch (e : unknown) {
        console.error(e);
    }
}

start(server)
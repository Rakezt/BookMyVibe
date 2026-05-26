import { Server } from 'socket.io';
import socketHandler from '../modules/chat/socket.handler';

export const initSocket = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  });

  socketHandler(io);
};

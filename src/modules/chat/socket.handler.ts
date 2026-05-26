import { Server, Socket } from 'socket.io';
import { saveMessageService } from './chat.service';

const socketHandler = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on('join_room', (roomId: string) => {
      socket.join(roomId);

      console.log(`Socket joined room: ${roomId}`);
    });

    socket.on('send_message', async (data) => {
      await saveMessageService(data);

      io.to(data.roomId).emit('receive_message', data);
    });

    socket.on('disconnect', () => {
      console.log(`Disconnected: ${socket.id}`);
    });
  });
};

export default socketHandler;

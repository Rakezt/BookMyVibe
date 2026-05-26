import Chat from './chat.model';

export const saveMessageService = async (payload: any) => {
  return Chat.create(payload);
};

export const getMessagesService = async (roomId: string) => {
  return Chat.find({
    roomId,
  }).sort({
    createdAt: 1,
  });
};

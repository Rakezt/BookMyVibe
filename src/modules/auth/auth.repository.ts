import User from '../models/user.model';

export const findUserByEmail = async (email: string) => {
  return User.findOne({ email }).select('+password');
};

export const createUser = async (data: any) => {
  return User.create(data);
};

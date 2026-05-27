import mongoose, { Schema } from 'mongoose';

export enum UserRole {
  ORGANIZER = 'ORGANIZER',
  CUSTOMER = 'CUSTOMER',
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.CUSTOMER,
    },

    refreshToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', userSchema, 'eventUser');

export default User;

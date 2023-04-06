import { Schema } from 'dynamoose';
import { v4 as uuidv4 } from 'uuid';

export const ContactSchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: (): string => uuidv4(),
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: 'createDate',
      updatedAt: null,
    },
  },
);

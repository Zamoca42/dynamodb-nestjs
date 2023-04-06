import { Schema } from 'dynamoose';

export const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      hashKey: true,
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

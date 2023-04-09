import { Schema } from 'dynamoose';

export const ContactSchema = new Schema(
  {
    id: {
      type: Number,
      hashKey: true,
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

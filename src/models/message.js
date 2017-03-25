import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
  },
);
const Message = mongoose.model('Message', MessageSchema);
export default Message;

export const getAllMessages = () => {
  return new Promise((resolve, reject) => {
    Message.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

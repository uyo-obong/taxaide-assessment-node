import { Schema, model } from 'mongoose';
import { ITodoRefers } from '../interfaces/model.interface';

const TodoRefersSchema = new Schema<ITodoRefers>(
  {
    posted_by: String,
    email: String,
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const TodoSchema = model<ITodoRefers>('TodoRefers', TodoRefersSchema);

export default TodoSchema;

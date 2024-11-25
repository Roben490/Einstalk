import mongoose, { Schema, Document, Types } from "mongoose";
import { IUser } from "./userModel";

export interface IComment {
  content: string;
  author: IUser["_id"];
}

export interface IPuzzele extends Document {
  title: string;
  img: string;
  content: string;
  author: IUser["_id"];
  comments: IComment[];
}

export const CommentSchema = new Schema<IComment>(
  {
    content: {
      type: String,
      required: true,
      min: 1,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "UserPuzzle",
    },
  },
  { timestamps: true }
);

const PuzzeleSchema = new Schema<IPuzzele>({
  //post schema
  title:{
    type:String,
    require: [true,'enter title'],
    min:5,
    max:30
  },
  content:{
    type:String,
    require: [true,'no content post'],
    min:1
  },
  author:{
    type: Schema.Types.ObjectId,
    ref: 'UserPuzzle'
  },
  comments:{
    type: [CommentSchema]
  }
},{timestamps:true})
PuzzeleSchema.index({author:1})
CommentSchema.index({author:1})
export default mongoose.model<IPuzzele>("PostPuzzle", PuzzeleSchema);

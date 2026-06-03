import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type:String,
    required: true
  },
  image: {
    type:String,
    required:true,
  },
  clerkId: {
    required:true,
    unique:true,
  },
},
 {timestamps:true}// createAt, updateAt
);

export const User = mongoose.model("User", userSchema);
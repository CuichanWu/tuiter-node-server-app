import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    topic: String,
    username: String,
    handle: String,
    time: String,
    image: String,
    title: String,
    tuit: String,
    liked: Boolean,
    likes: Number,
    dislikes: Number,
    disliked: Boolean,
    replies: Number,
    retuits: Number,

    // tuit: String,
    // likes: Number,
    // liked: Boolean,
  },
  { collection: "tuits" }
);
export default schema;

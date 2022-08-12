const { model, Schema } = require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, "Post must have title"],
    },
    body: {
        type: String,
        required: [true, "Post must have body"],
    },
});

const Post = model("Post", postSchema);

module.exports = Post;

const mongoose =require('mongoose');

const commentSchema = mongoose.Schema({
    comAuthor: String,
    comText: String,
    newsId: String
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment
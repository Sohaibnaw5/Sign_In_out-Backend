const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {Timestamp: true});

module.exports = mongoose.model("Post", PostSchema);

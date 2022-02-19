const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    Id:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true
    },
    Content:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    CreatedDate:{
        type:String,
        required:true
    }
})

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

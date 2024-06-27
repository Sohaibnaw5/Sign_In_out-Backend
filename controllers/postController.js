const postModel = require("../models/post");

const createPost = async (req, res) =>{
    const {title,description} = req.body;
    const newPost = new postModel({
        title: title,
    description: description,
userId: req.userId
    })
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "ERoRRR"})
    }
} 

const updatePost = async (req,res) =>{
    const id = req.params.id;
    const {title,description} = req.body;

    const newPost = {
        title : title,
        description : description,
        userId : req.userId
    }

    try {
        await postModel.findByIdAndUpdate(id,newPost,{new : true});
        res.status(200).json(newPost)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "ERooRRRRRR"})
    }
}

const deletePost = async (req,res) =>{
    const id = req.params.id;
    try {
        const post = await postModel.findByIdAndDelete(id);
        res.status(200).json(post)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "ERooRRRRRRR"})
    }
}

const getPost = async (req,res) =>{
    try {
        const posts = await postModel.find({userId : req.userId});
        res.status(200).json(posts);   
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "ERooRRR"})
    }
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    getPost
}
const express = require("express");
const { getPost, updatePost, createPost, deletePost } = require("../controllers/postController");
const auth = require("../middleware/auth");
const postRouter = express.Router();

postRouter.post("/", auth ,createPost)
postRouter.delete("/:id",auth,deletePost)
postRouter.get("/",auth,getPost)
postRouter.put("/:id",auth,updatePost)

module.exports = postRouter;
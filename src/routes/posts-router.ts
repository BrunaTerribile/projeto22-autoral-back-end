import { createPost, deletePost, getAllPosts, getPostById, getUserPosts } from "../controllers/posts-controller.js";
import { authenticateToken } from "../middlewares/authentication-middleware.js";
import { Router } from "express";

const postsRouter = Router();

postsRouter
    .all('/*', authenticateToken)
    .get('/', getAllPosts)
    .get('/:id', getPostById)
    .get('/my-posts', getUserPosts)
    .post('/my-posts', createPost)
    .delete('/my-posts/delete/:id', deletePost)
//.update('/my-posts/update/:id', updatePost)


export { postsRouter }
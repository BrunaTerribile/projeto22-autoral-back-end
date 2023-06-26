import { createPost, deletePost, getAllPosts, getPostById, getUserPosts, updatePost } from "../controllers/posts-controller.js";
import { authenticateToken } from "../middlewares/authentication-middleware.js";
import { Router } from "express";

const postsRouter = Router();

postsRouter
    .all('/*', authenticateToken)
    .get('/', getAllPosts)
    .get('/:postId', getPostById)
    .get('/my-posts/me', getUserPosts)
    .post('/publish', createPost)
    .delete('/my-posts/delete/:postId', deletePost)
    .put('/my-posts/update/:postId', updatePost)


export { postsRouter }
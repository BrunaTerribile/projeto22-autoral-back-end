import { getAllPosts, getPostById, getUserPosts } from "@/controllers/posts-controller.js";
import { authenticateToken } from "../middlewares/authentication-middleware.js";
import { Router } from "express";

const postsRouter = Router();

postsRouter
//    .all('/*', authenticateToken)
    .get('/', getAllPosts)
    .get('/:id', getPostById)
    .get('/myposts', getUserPosts)
//.post('/myposts', createPost)
//.delete('/myposts/delete/:id', deletePost)
//.update('/myposts/update/:id', updatePost)


export { postsRouter }
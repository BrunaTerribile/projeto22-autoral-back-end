import { getAllPosts, getPostById } from "@/controllers/posts-controller.js";
import { authenticateToken } from "../middlewares/authentication-middleware.js";
import { Router } from "express";

const postsRouter = Router();

postsRouter
//    .all('/*', authenticateToken)
    .get('/', getAllPosts)
    .get('/:id', getPostById)

export { postsRouter }
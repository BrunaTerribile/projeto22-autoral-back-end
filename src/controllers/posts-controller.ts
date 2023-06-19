import httpStatus from 'http-status-codes';
import postsService from '../services/posts-service/index.js'
import { AuthenticatedRequest } from '@/middlewares/authentication-middleware.js';
import { NextFunction, Response } from 'express';

export async function getAllPosts(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { userId } = req;

    try {
        const posts = await postsService.getAllPosts(userId);
        return res.status(httpStatus.OK).send(posts);
      } catch (error) {
        next(error);
      }
}

export async function getPostById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { postId } = req.params;

    try {
        const post = await postsService.getPostById(Number(postId));
        return res.status(httpStatus.OK).send(post);
      } catch (error) {
        next(error);
      }
}
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

export async function getUserPosts(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;

  try {
    const userposts = await postsService.getUserPosts(userId);
    return res.status(httpStatus.OK).send(userposts);
  } catch (error) {
    next(error);
  }
}

export async function createPost(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;
  const { type, title, description, imageUrl } = req.body;

  try {
    const newPost = await postsService.createPost(userId, type, title, description, imageUrl);
    return res.status(httpStatus.CREATED).send(newPost);
  } catch (error) {
    next(error);
  }
}

export async function deletePost(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;
  const { postId } = req.params;

  try {
    const deletedPost = await postsService.deletePost(userId, Number(postId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}

export async function updatePost(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;
  const { postId } = req.params;
  const { title, description, imageUrl } = req.body;

  try {
    const update = await postsService.updatePost(userId, Number(postId), title, description, imageUrl);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}
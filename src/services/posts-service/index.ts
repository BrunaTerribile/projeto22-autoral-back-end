import { notFoundError } from '@/errors';
import postsRepository from '@/repositories/posts-repository';

async function getAllPosts(userId: number) {
  const posts = await postsRepository.getAll();
  if (!posts) throw notFoundError();

  return posts;
}

async function getPostById(postId: number) {
    const post = await postsRepository.getPost(postId);
    if (!post) throw notFoundError();
  
    return post;
}

async function getUserPosts(userId: number) {
    const posts = await postsRepository.getUserPosts(userId);
    if (!posts) throw notFoundError();
  
    return posts;
}

export default {
    getAllPosts,
    getPostById,
    getUserPosts
}
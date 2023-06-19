import { notFoundError } from '@/errors';
import { PostParams } from '@/protocols';
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

async function createPost(userId: number,  typeId: number, title: string, description: string) {
    const newPost: PostParams = {
        userId,
        type: typeId,
        description
    }

    const post = await postsRepository.createPost(newPost);
    return post;
}

export default {
    getAllPosts,
    getPostById,
    getUserPosts,
    createPost
}
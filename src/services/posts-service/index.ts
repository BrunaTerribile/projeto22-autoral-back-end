import { notFoundError, unauthorizedError } from '../../errors/index.js';
import { PostParams } from '../../protocols.js';
import postsRepository from '../../repositories/posts-repository/index.js';

async function getAllPosts(userId: number) {
  const posts = await postsRepository.getAll(userId);
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

async function createPost(userId: number,  typeId: number, title: string, description: string, imageUrl: string) {
    const newPost: PostParams = {
        userId,
        type: typeId,
        title,
        description,
        imageUrl
    }

    const post = await postsRepository.createPost(newPost);
    return post;
}

async function deletePost(userId: number, postId: number) {
    const post = await postsRepository.getPost(postId)
    if(post != null) {
        if(post.userId != userId) throw unauthorizedError();
    }

    await postsRepository.deletePost(postId)
}

async function updatePost(userId: number, postId: number, title: string, description: string, imageUrl: string) {
    const post = await postsRepository.getPost(postId)
    if(post != null) {
        if(post.userId != userId) throw unauthorizedError();
    }

    await postsRepository.updatePost(postId, title, description, imageUrl)
}

export default {
    getAllPosts,
    getPostById,
    getUserPosts,
    createPost,
    deletePost,
    updatePost
}
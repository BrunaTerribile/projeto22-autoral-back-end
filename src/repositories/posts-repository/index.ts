import { prisma } from '../../config/database.js';
import { PostParams } from '@/protocols';

async function getAll(userId: number) {
  return prisma.$queryRaw`
  SELECT p.*
  FROM public."Posts" AS p
  JOIN public."Relationship" AS r
	  ON p."userId" = r."followedId"
  WHERE r."followerId" = ${userId}
  `
}

async function getPost(postId: number) {
  return prisma.posts.findFirst({
    where: { id: postId },
    include: {
      Comments: true,
    }
  })
}

async function getUserPosts(userId: number) {
  return prisma.posts.findMany({
    where: { userId }
  })
}

async function createPost(params: PostParams) {
  return prisma.posts.create({
    data: {
      ...params
    }
  })
}

async function deletePost(postId: number) {
  return prisma.posts.delete({
    where: { id: postId }
  })
}

async function updatePost(postId: number, title: string, description: string, imageUrl: string) {
  return prisma.posts.update({
    where: { id: postId },
    data: { description, imageUrl, title }
  })
}


const postsRepository = {
  getAll,
  getPost,
  getUserPosts,
  createPost,
  deletePost,
  updatePost
};

export default postsRepository;

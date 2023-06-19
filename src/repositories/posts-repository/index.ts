import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function getAll() {
  return prisma.posts.findMany()
}

async function getPost(postId: number) {
  return prisma.posts.findFirst({
    where: { id: postId }
  })
}

const postsRepository = {
  getAll,
  getPost
};

export default postsRepository;

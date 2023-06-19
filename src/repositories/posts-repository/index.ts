import { prisma } from '@/config';

async function getAll() {
  return prisma.posts.findMany()
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

async function createPost(data: any) {
  return prisma.posts.create({
    data
  })
}

async function deletePost(postId: number) {
  return prisma.posts.delete({
    where: { id: postId }
  })
}

async function updatePost(postId: number, data: any) {
  return prisma.posts.update({
    where: { id: postId },
    data: { data }
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

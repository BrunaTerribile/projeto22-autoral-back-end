import { Prisma } from '@prisma/client';
import { prisma } from '../../config/database.js';

async function findByEmail(email: string, select?: Prisma.UsersSelect) {
  return prisma.users.findFirst({
    where: { email }
  });
}

async function create(data: Prisma.UsersUncheckedCreateInput) {
  return prisma.users.create({
    data,
  });
}

async function getNeighbor(userId: number, neighborId: number) {
  return prisma.users.findFirst({
    where: { id: neighborId },
    include: { 
      Relationship_Relationship_followedIdToUsers: { 
        where: { followerId: userId}
      }
    }
  })
}

const userRepository = {
  findByEmail,
  create,
  getNeighbor
};

export default userRepository;

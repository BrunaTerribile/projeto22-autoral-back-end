import { prisma } from '@/config';

async function getAll(userId: number) {
  return prisma.relationship.findMany({
    where: { followedId: userId }
  })
}

async function followNeighbor(userId: number, followedId: number){
    return prisma.relationship.create({
        data: {
            followerId: userId,
            followedId
        }
    })
}

const relationsRepository = {
    getAll,
    followNeighbor
}

export default relationsRepository;
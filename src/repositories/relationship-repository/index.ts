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

async function searchNeighbor(userId: number, name: string) {
  return prisma.users.findMany({
    where: { username: { contains: name } }
  })
}
//add join relations table to insert follow/following

const relationsRepository = {
    getAll,
    followNeighbor,
    searchNeighbor
}

export default relationsRepository;
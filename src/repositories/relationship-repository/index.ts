import { prisma } from '../../config/database.js';

async function getAll(userId: number) {
  return prisma.relationship.findMany({
    where: { followerId: userId },
    include: { 
      Users_Relationship_followedIdToUsers: {
        select: {
          username: true
        }
      }
    }
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
    where: { username: { contains: name } },
    include: { 
      Relationship_Relationship_followedIdToUsers: { 
        where: { followerId: userId}
      }
    }
  })
}

const relationsRepository = {
  getAll,
  followNeighbor,
  searchNeighbor,

}

export default relationsRepository;
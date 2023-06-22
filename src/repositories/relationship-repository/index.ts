import { prisma } from '@/config';

async function getAll(userId: number) {
  return prisma.relationship.findMany({
    where: { followedId: userId }
  })
}

const relationsRepository = {
    getAll
}

export default relationsRepository;
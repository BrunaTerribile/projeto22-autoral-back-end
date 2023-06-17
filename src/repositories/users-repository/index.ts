import { Prisma } from '@prisma/client';
import { prisma } from '../../config/database.js';

async function findByEmail(email: string, select?: Prisma.usersSelect) {
  return prisma.users.findFirst({
    where: { email }
  });
}

async function create(data: Prisma.usersUncheckedCreateInput) {
  return prisma.users.create({
    data,
  });
}

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;

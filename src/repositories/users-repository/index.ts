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

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;

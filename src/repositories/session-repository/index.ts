import { Prisma } from '@prisma/client';
import { prisma } from '../../config/database.js';

async function create(data: Prisma.SessionUncheckedCreateInput) {
  return prisma.session.create({
    data,
  });
}

const sessionRepository = {
  create,
};

export default sessionRepository;

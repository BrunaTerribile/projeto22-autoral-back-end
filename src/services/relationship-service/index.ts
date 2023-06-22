import { notFoundError } from '@/errors';
import relationsRepository from '@/repositories/relationship-repository';

async function getAll(userId: number) {
  const neighbors = await relationsRepository.getAll(userId);
  if (!neighbors) throw notFoundError();

  return neighbors;
}

export default {
    getAll
}

import { conflictError, notFoundError } from '@/errors';
import relationsRepository from '@/repositories/relationship-repository';
import userRepository from '@/repositories/users-repository';

async function getAll(userId: number) {
  const neighbors = await relationsRepository.getAll(userId);
  if (!neighbors) throw notFoundError();

  return neighbors;
}

async function followNeighbor(userId: number, followedId: number) {
    const previous = await relationsRepository.followNeighbor(userId, followedId);
    if (!previous) throw conflictError('Something went wrong, please try again later');
  
    return previous;
}

async function searchNeighbor(userId: number, name: string) {
  const neighbor = await relationsRepository.searchNeighbor(userId, name);
  if (!neighbor) throw notFoundError();

  return neighbor;
}

async function getNeighbor(userId: number, neighborId: number) {
  const neighbor = await userRepository.getNeighbor(userId, neighborId);
  if (!neighbor) throw notFoundError();

  return neighbor;
}

export default {
    getAll,
    followNeighbor,
    searchNeighbor,
    getNeighbor
}

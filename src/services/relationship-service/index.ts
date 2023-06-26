import { exclude } from '../../utils/prisma-utils.js';
import { conflictError, notFoundError } from '../../errors/index.js';
import relationsRepository from '../../repositories/relationship-repository/index.js';
import userRepository from '../../repositories/users-repository/index.js';

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
  const neighbors = await relationsRepository.searchNeighbor(userId, name);
  if (!neighbors) throw notFoundError();

  const result = neighbors.map(n => exclude(n, 'password'))
  return result;
}

async function getNeighbor(userId: number, neighborId: number) {
  const neighbor = await userRepository.getNeighbor(userId, neighborId);
  if (!neighbor) throw notFoundError();
  
  return {
    neighbor: exclude(neighbor, 'password')
  };
}

export default {
    getAll,
    followNeighbor,
    searchNeighbor,
    getNeighbor
}

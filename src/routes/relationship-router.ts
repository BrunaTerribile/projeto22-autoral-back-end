import { followNeighbor, getAllNeighbors } from '@/controllers/relationship-controller';
import { Router } from 'express';

const relationsRouter = Router();

relationsRouter.get('/', getAllNeighbors).post('/:followedId', followNeighbor)

export { relationsRouter }
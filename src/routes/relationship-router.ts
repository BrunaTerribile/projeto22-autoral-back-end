import { followNeighbor, getAllNeighbors, getNeighborData, searchNeighbor } from '@/controllers/relationship-controller';
import { Router } from 'express';

const relationsRouter = Router();

relationsRouter
    .get('/', getAllNeighbors)
    .get('/search', searchNeighbor)
    .get('/:neighborId', getNeighborData)
    .post('/follow/:followedId', followNeighbor)

export { relationsRouter }
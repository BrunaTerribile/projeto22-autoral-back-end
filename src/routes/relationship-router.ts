import { followNeighbor, getAllNeighbors } from '@/controllers/relationship-controller';
import { Router } from 'express';

const relationsRouter = Router();

relationsRouter
    .get('/', getAllNeighbors)
    .get('/search', searchNeighbor)
    .post('/follow/:followedId', followNeighbor)

export { relationsRouter }
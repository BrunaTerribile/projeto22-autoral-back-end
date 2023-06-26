import { followNeighbor, getAllNeighbors, getNeighborData, searchNeighbor } from '../controllers/relationship-controller.js';
import { authenticateToken } from '../middlewares/authentication-middleware.js';
import { Router } from 'express';

const relationsRouter = Router();

relationsRouter
    .all('/*', authenticateToken)
    .get('/', getAllNeighbors)
    .get('/search', searchNeighbor)
    .get('/:neighborId', getNeighborData)
    .post('/follow/:followedId', followNeighbor)

export { relationsRouter }
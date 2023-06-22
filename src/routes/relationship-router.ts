import { getAllNeighbors } from '@/controllers/relationship-controller';
import { Router } from 'express';

const relationsRouter = Router();

relationsRouter.get('/', getAllNeighbors)

export { relationsRouter }
import { Router } from 'express';
import { singInPost } from '../controllers/authentication-controller.js';
import { validateBody } from '../middlewares/validation-middleware.js';
import { signInSchema } from '../schemas/authentication-schemas.js';

const authenticationRouter = Router();

authenticationRouter.post('/sign-in', validateBody(signInSchema), singInPost);

export { authenticationRouter };
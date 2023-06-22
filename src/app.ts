import express, { Express } from 'express';
import cors from 'cors';

import { connectDb, disconnectDB } from './config/database.js';
import {loadEnv} from './config/envs.js'

loadEnv();

import { handleApplicationErrors } from './middlewares/error-handling-middleware.js';
import { usersRouter } from './routes/users-router.js';
import { authenticationRouter } from './routes/authentication-router.js';
import { postsRouter } from './routes/posts-router.js';
import { relationsRouter } from './routes/relationship-router.js';

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/users', usersRouter)
  .use('/auth', authenticationRouter)
  .use('/feed', postsRouter)
  .use('/my-neighbors', relationsRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
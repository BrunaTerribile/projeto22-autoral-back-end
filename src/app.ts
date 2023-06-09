//import 'reflect-metadata';
//import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';

import { connectDb, disconnectDB } from './config/database.ts';
import {loadEnv} from './config/envs.ts'

loadEnv();

import { handleApplicationErrors } from './middlewares/error-handling-middleware.ts';
import { usersRouter } from './routes/users-router.ts';

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use('/users', usersRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
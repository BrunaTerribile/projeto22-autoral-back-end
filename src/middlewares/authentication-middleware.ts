import { NextFunction, Response } from 'express';
import httpStatus from 'http-status-codes';
import * as jwt from 'jsonwebtoken';

import { unauthorizedError } from '../errors/unauthorized-error.js';
import { prisma } from '../config/database.js';

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.header('Authorization');
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(' ')[1];
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const secret = process.env.JWT_SECRET;
    if(!secret) throw new Error('JWT secret not defined');

    const { userId } = jwt.verify(token, secret) as JWTPayload;

    const session = await prisma.session.findFirst({
      where: {
        token,
      },
    });
    
    if (!session) return generateUnauthorizedResponse(res);

    req.userId = userId;

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

export type AuthenticatedRequest = any //Request & JWTPayload;

type JWTPayload = {
  userId: number;
};

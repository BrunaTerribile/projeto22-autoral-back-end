import userService from '@/services/users-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status-codes';

export async function createUser(req: Request, res: Response) {
  const { email, password, username } = req.body;

  try {
    const user = await userService.createUser({ email, password, username });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error: any) {
    if (error.name === 'DuplicatedEmailError') {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

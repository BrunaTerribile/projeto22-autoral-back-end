import { Users } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { exclude } from '../../utils/prisma-utils.js';
import userRepository from '../../repositories/users-repository/index.js';
import sessionRepository from '../../repositories/session-repository/index.js';

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, 'password'),
    token,
  };
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await userRepository.findByEmail(email, { id: true, email: true, password: true });
  if (!user) throw new Error('Email or password are incorrect') //invalidCredentialsError();

  return user;
}

async function createSession(userId: number) {
  const secret = process.env.JWT_SECRET;
  if(!secret) throw new Error('JWT secret not defined');

  const token = jwt.sign({ userId }, secret, {expiresIn: 86400});
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw new Error('Email or password are incorrect') // invalidCredentialsError();
}

export type SignInParams = Pick<Users, 'email' | 'password'>;

type SignInResult = {
  user: Pick<Users, 'id' | 'email'>;
  token: string;
};

type GetUserOrFailResult = Pick<Users, 'id' | 'email' | 'password'>;

const authenticationService = {
  signIn,
};

export default authenticationService;
export * from './banana.js';

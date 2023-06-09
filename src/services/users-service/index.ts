import { Users } from '@prisma/client';
import bcrypt from 'bcrypt';
import { duplicatedEmailError } from './errors.ts';
import userRepository from '@/repositories/users-repository/index.ts';

export async function createUser({ email, password, username }: CreateUserParams) {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    password: hashedPassword,
    username
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) throw duplicatedEmailError();
}

export type CreateUserParams = Pick<Users, 'email' | 'password' | 'username'>;

const userService = {
  createUser,
};

export * from './errors';
export default userService;

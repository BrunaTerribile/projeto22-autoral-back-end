import { CreateUserParams } from '../services/users-service/index';
import Joi from 'joi';

export const createUserSchema = Joi.object<CreateUserParams>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  username: Joi.string().min(2).required()
});

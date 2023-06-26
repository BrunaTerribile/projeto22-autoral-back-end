import { ApplicationError } from '../../protocols.js';

export default function invalidCredentialsError(): ApplicationError {
  return {
    name: 'InvalidCredentialsError',
    message: 'email or password are incorrect',
  };
}

import { Posts } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type PostParams = Omit<Posts, 'id' | 'createdAt' | 'updatedAt'>;

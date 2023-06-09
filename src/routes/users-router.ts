import { createUser } from "@/controllers/users-controller";
import { validateBody } from "@/middlewares/validation-middleware";
import { createUserSchema } from "@/schemas/users-schemas";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post('/', validateBody(createUserSchema), createUser);

export { usersRouter }
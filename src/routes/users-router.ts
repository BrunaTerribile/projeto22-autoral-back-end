import { createUser } from "../controllers/users-controller.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { createUserSchema } from "../schemas/users-schemas.js";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post('/', validateBody(createUserSchema), createUser);

export { usersRouter }
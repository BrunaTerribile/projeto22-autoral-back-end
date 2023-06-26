import Joi from 'joi';

export const postSchema = Joi.object({
  userId: Joi.number().integer().required(),
  type: Joi.number().integer().max(3).required(),
  description: Joi.string().required(),
  title: Joi.string().required(),
  imageUrl: Joi.string().required(),
});

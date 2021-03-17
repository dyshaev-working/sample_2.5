import * as Joi from 'joi';

const createUserSchema = Joi.object().keys({
  firstName: Joi.string().min(5).max(15).required(),
  lastName: Joi.string().min(5).max(15).required(),
  age: Joi.number().integer().positive().required(),
});

export { createUserSchema };
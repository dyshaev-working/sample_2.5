import * as Joi from 'joi';

const signinSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export { signinSchema };

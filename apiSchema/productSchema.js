const Joi = require('@hapi/joi');

module.exports.createProductSchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    brand: Joi.string().required()
});
//pagination
module.exports.getAllProductSchema = Joi.object().keys({
    skip: Joi.string(),
    limit: Joi.string()
  });
//for updating the products 
module.exports.updateProductSchema = Joi.object().keys({
    name: Joi.string(),
    price: Joi.number(),
    brand: Joi.string()
  });
  
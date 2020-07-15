const Joi = require('@hapi/joi');

const validateObjectSchema = (undefined, data, schema) => {
  const result = Joi.validate(undefined, data, schema, {convert: false});
  console.log('Joi schema validation Result===', result);
}

module.exports.validateBody = (schema) => {
    return(req, res, next) =>{
        validateObjectSchema(req.body, schema);
    }
}
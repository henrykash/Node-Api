const Joi = require('@hapi/joi');

const validateObjectSchema = (data, schema) => {
  const result = Joi.validate(data, schema, {convert: false});
  const errorDetails = result.error.details.map(vslue => {
      return {
           error: value.message,
           path: value.path
      }
  })
}

module.exports.validateBody = (schema) => {
    return(req, res, next) =>{
        validateObjectSchema(req.body, schema);
    }
}
const Joi = require('@hapi/joi');

const validateObjectSchema = (data, schema) => {
  console.log('Joi schema validation Result===', result);
}

module.exports.validateBody = (schema) => {
    return(req, res, next) =>{
        validateObjectSchema(req.body, schema);
    }
}
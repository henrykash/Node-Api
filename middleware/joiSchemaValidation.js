const Joi = require('@hapi/joi');

const validateObjectSchema = (data, schema) => {
  const result = Joi.validate(data, schema, {convert: false});
  if(result.error){
    const errorDetails = result.error.details.map(value => {
        return {
             error: value.message,
             path: value.path
        };
    });
    return errorDetails;
  }
     return null;
    console.log('errorDetails ===', result.error.details);
}

module.exports.validateBody = (schema) => {
    return(req, res, next) =>{
        validateObjectSchema(req.body, schema);
    }
}
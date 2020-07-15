const productService = require('../service/productService');
const constants = require('../constants');

module.exports.createProduct = async (req, res) => {
    let response = {...constants.defaultServiceResponse};
  try {
      const responseFromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = constants.productMessage.PRODUCT_CREATED;
        response.body = responseFromService;

     } catch(error){
      console.log('something went wring: Controller: createProduct', error);
  // response.status = 400;
        response.message = error.message;
    //    response.body = {};
  }
     return res.status(response.status).send(response);
}
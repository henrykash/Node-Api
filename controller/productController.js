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
  
        response.message = error.message;
    
  }
     return res.status(response.status).send(response);
}
module.exports.getAllProducts = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await productService.getAllProducts(req.query);
    response.status = 200;
    response.message = constants.productMessage.PRODUCT_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: getAllProducts', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}

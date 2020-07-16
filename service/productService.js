const Product = require('../database/models/productModel');
const {formatMongoData, checkObjectId} = require('../helper/dbHelper');
const constants = require('../constants');

module.exports.createProduct = async (serviceData) => {
 try { 
   //inserting data to db
    let product = new Product({ ...serviceData});
    let result = await product.save();
    return formatMongoData(result);
  } catch(error){
    console.log('something went wrong: service: createProduct', error);
    throw new Error(error)
  }

}

module.exports.getAllProducts = async ({skip = 0, limit = 10}) => {
  try { 
    //inserting data to db
     let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
     return formatMongoData(products);
   } catch(error){
     console.log('something went wrong: service: getAllProducts', error);
     throw new Error(error)
   }
 
 }

 module.exports.getProductById = async ({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findById(id);
    if (!product) {
      throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log('Something went wrong: Service: getProductById', error);
    throw new Error(error);
  }
}
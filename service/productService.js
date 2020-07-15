const Product = require('../database/models/productModel');
const {formatMongoData} = require('../helper/dbHelper');
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
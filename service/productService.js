const Product = require('../database/models/productModel');

module.exports.createProduct = async (serviceData) => {
 try { 
   //inserting data to db
    let product = new Product({ ...serviceData});
    let result = await product.save();
    return result.toObject();
  } catch(error){
    console.log('something went wrong: service: createProduct', error);
    throw new Error(error)
  }

}

module.exports.getAllProducts = async (serviceData) => {
  try { 
    //inserting data to db
     let products = await Product.find({});
     return products;
   } catch(error){
     console.log('something went wrong: service: getAllProducts', error);
     throw new Error(error)
   }
 
 }
const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../apiSchema/productSchema');

router.post('/',
 joiSchemaValidation.validateBody(productSchema.createProductSchema), 
productController.createProduct);

router.get('/:id',
  productController.getProductById
);
router.get('/',
 joiSchemaValidation.validateQuerryParams(productSchema.getAllProductSchema),
productController.getAllProducts)

module.exports = router;
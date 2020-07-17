module.exports = {
    defaultServiceResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Succesfully',
        PRODUCT_FETCHED: 'Product Fetched Successfully',
        PRODUCT_UPDATED: 'Product Updated Successfully',
        PRODUCT_DELETED: 'Product Deleted Successfully',
        PRODUCT_NOT_FOUND: 'Product Not Found'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Success',
        LOGIN_SUCCESS: 'Login Success',
        DUPLICATE_EMAIL: 'User already exist with given email',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Incorrect Password'
      },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
      }
}

const User = require('../database/models/userModel');
const constants = require('../constants');
const { formatMongoData } = require('../helper/dbHelper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signup = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error(constants.userMessage.DUPLICATE_EMAIL);
    }
    password = await bcrypt.hash(password, 12);
    const newUser = new User({ email, password });
    let result = await newUser.save();
    return formatMongoData(result);
  } catch (error) {
    console.log('Something went wrong: Service: signup', error);
    throw new Error(error);
  }
}

module.exports.login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(constants.userMessage.USER_NOT_FOUND);
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error(constants.userMessage.INVALID_PASSWORD);
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY || 'my-secret-key', { expiresIn: '1d' });
    return { token };
  } catch (error) {
    console.log('Something went wrong: Service: login', error);
    throw new Error(error);
  }

}
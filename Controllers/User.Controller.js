const createError = require('http-errors')
const User = require('../Models/User.model')
module.exports = {
  list: async (req, res, next) => {
    try {
      const result = await User.find()
        res.send(result);
      } catch (error) {
        next(error)
      }
  },
};

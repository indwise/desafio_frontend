
const productData = require('../fixtures/production');

exports.find = async (req, res) => {
  try {
    res.json(productData);
  } catch (err) {
    return res.badRequest(err.message);
  }
};

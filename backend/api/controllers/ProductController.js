const productData = require('../fixtures/product');

exports.find = async (req, res) => {
  return res.json(productData);
}

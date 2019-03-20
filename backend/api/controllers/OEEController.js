const oeeData = require('../fixtures/OEE.js');

exports.find = async (req, res) => {
  return res.json(oeeData);
}

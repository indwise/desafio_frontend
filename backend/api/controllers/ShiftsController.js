const productionData = require('../fixtures/shifts');

exports.getShifts = async (req, res) => {

  return res.json(productionData);
};

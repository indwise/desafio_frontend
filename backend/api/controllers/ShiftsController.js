const productionData = require('./fixture/shifts');

exports.getShifts = async (req, res) => {

  return res.json(productionData);
};


let fs = require('fs');

exports.find = async (req, res) => {
  try {
    let production = JSON.parse(fs.readFileSync('api/controllers/fixture/production.json', 'utf8'));
    return res.json(production);
  } catch (err) {
    return res.badRequest(err.message);
  }
};

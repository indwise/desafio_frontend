
let fs = require('fs');

exports.getProduction = async (req, res) => {
  let obj = [];
  await new Promise((resolve, reject) => {
    fs.readFile('api/controllers/fixture/production.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      else {
        obj = JSON.parse(data);
        resolve(data);
      }
    });
  });

  return res.json(obj);
};

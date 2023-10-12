const db = require("../config/db.config");

exports.viewAllTour = (data, callback) => {
  const sql = "SELECT * FROM TOUR";

  db.query(sql, [], (err, data, fields) => {
    if (err) return callback(err);
    else callback(null, data);
  });
};

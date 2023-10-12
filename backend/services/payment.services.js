const db = require("../config/db.config");

exports.viewAllPayment = (data, callback) => {
  const sql = "SELECT * FROM HOADON";
  db.query(sql, [], (err, data, fields) => {
    if (err) return callback(error);
    return callback(null, data);
  });
};

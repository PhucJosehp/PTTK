const db = require("../config/db.config");

exports.getAllRooms = async (req, res) => {
  const sql = "SELECT * FROM ViewAllRooms";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.status(200).json(data);
  });
};

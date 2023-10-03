const cors = require("cors");
const express = require("express");

const roomRoutes = require("./routes/room.route");

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "qlkhachsan",
});

const app = express();
app.use(cors());

app.use("/room", roomRoutes);

app.get("/", (req, res) => {
  const sql = "SELECT * FROM KHACHHANG";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.status(200).json(data);
  });
});

app.listen(5000, () => {
  console.log("Listening...");
});

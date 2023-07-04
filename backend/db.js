const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "qlkhachsan",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM KHACHHANG";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.listen(5000, () => {
  console.log("Listening...");
});

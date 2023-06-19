const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "qlkhachsan",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM KHACHHANG LIMIT 10";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

app.listen(5000, () => {
  console.log("Listening...");
});

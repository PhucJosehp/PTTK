import sql from "./node_modules/mssql/msnodesqlv8.js";

// SQL Server connection configuration
const config = {
  server: "LAPTOP-BU2ES19P",
  database: "QLKhachSan",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

sql.connect(config, function (err) {
  if (err) console.log(err);

  var request = new sql.Request();
  request.query("select * from bellman", function (err, records) {
    if (err) console.log(err);
    else console.log(records);
  });
});

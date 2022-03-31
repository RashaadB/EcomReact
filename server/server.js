const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
// app.use(express.json());
app.use(cors());

//create connection
const db = mysql.createPool({
  user: "root",
  host: "localhost",
  password: "Playsmart1414!!!",
  database: "rsb_skateshop",
});

//connect to above mention mysql server
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("MySql connected...");
// });

//fetch sql

app.get("/getpost", (req, res) => {
  let sql = `select * from products`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen(process.env.PORT || 8080, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

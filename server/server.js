const express = require("express");

const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
// app.use(cors( res ) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authortization');
//   res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

//create connection
const db = mysql.createConnection({
  user: "be1d00d0ff3505",
  host: "us-cdbr-east-05.cleardb.net",
  password: "1ed6fec1",
  database: "heroku_bb146e3c6412d82",
});

//connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql connected...");
});

// app.use(express.json())
//fetch sql
app.get("/getpost", (req, res) => {
  let sql = "SELECT * FROM products";
  db.query(sql, (err, results) => {
    if (err) throw err;
    // console.log(results);
    res.json(results);
  });
});

// app.listen(3001, () => {
//   console.log("Port is running on 3001!! ");
// });

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// const PORT = process.env.PORT || "8080";

// app.set("port", PORT);

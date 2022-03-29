const express = require("express");

const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());

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

app.listen(3001, () => {
  console.log("Port is running on 3001!! ");
});

app.listen(process.env.PORT || Port, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const deck = req.body.deck;
//   const size = req.body.size;
//   const image = req.body.image;
//   const price = req.body.price;

//   db.query(
//     "INSERT INTO Decks (name, deck, size, image, price) VALUES(?,?,?,?,?)",
//     [name, deck, size, image, price],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });

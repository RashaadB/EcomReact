const express = require("express");

const mysql = require("mysql");
const cors = require("cors");

app.use(cors());

//create connection
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Playsmart1414!!!",
  database: "rsb_skateshop",
});

//connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql connected...");
});

const app = express();
app.use(express.json())
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

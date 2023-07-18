const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());


const connection = mysql.createConnection({
    host: "eccomv2.cki4l5elizud.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "password",
    database: "EcommV2Data"
});

connection.connect((err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("db connection successful!");
    } 
});
   
   
   
app.get("/api/products",  (req, res) => {
     connection.query("SELECT * FROM products", (err, result) => {
      if (err) {
     console.log(err);
      } else {
     res.send(result);
      }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
const products = require("./api/products.json");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(port, console.log("Server Started"));

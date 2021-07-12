const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

//Environment variable
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
console.log(result.parsed);

//database
// const db = require("./config/database");
// db.authenticate()
//   .then(() => {
//     console.log("Database connected...");
//   })
//   .catch((err) => {
//     console.log("Error: " + err);
//   });

// app.use(morgan("dev"));

//CORS middleware
app.use(cors());

//Body parser middleware
// application/json
app.use(bodyParser.json());
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

const shopRoutes = require("./routes/shop_route");

const collectionRoutes = require("./routes/collection_route");
const customerRoutes = require("./routes/customer_route");
const checkoutRoutes = require("./routes/checkout_route");

app.use("/shops", shopRoutes);

app.use("/collections", collectionRoutes);
app.use("/customer", customerRoutes);
app.use("/checkout", checkoutRoutes);

module.exports = app;

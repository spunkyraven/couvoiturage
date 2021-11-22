const express = require("express");
const connectDB = require("./config/connectDB");

require("dotenv").config();
// --------------------------------------------------------
const app = express();

// --------------------------------------------------------

connectDB();

//middlewares

//routes
app.use(express.json());
app.use("/api/user", require("./router/userRoutes"));
app.use("/api/trip", require("./router/tripRoutes"));
app.use("/admin", require("./router/admin.router"));

//production
//////////////////////////

// create server
// port
const PORT = process.env.PORT;

app.listen(8080, () => console.log("AdminBro is under localhost:8080/admin"));
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on PORT", ${PORT}`)
);

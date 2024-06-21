const express = require("express");
const mongoose = require("mongoose");
const employeeRoute = require("./routes/emp_route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/employee", employeeRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API");
});


mongoose
  .connect(
    "mongodb+srv://admin:whoQrEvAdDFanI9D@BackendDB.njtirsq.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Running port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

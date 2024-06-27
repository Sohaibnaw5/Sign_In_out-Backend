const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("../routes/userRoutes");
const postRouter = require("../routes/postRouter");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv")


dotenv.config();




app.use(express.json());   // what it does? It converts requested body to JSON 

app.use(cors());
// routes
app.use("/users", userRouter);  //  /user/signin OR /user/signup

app.use("/profile", postRouter);  // .profile/p OR /profile/s


app.get("/", (req, res) => {
  res.send("Hello from Node API");
});


mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Running port 3000");
      console.log("Server is running on port 3000");
      console.log("Running ON port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

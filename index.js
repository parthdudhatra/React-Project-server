const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");



const app = express();
const port = process.env.PORT || 4200;
// import userRoutes from "./routes/user"
const authrouter = require("./routes/auth-route");
const mongoose = require("mongoose");

app.use(
  express.urlencoded({ extended: true })
);
  
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//monoose
mongoose.connect(
  "mongodb+srv://parth:SBT6aWXVV9r1Eqpw@cluster0.yx8i0pv.mongodb.net/test",
  (err) => {
    if (err) {
      console.log("Db is not connecting");
    } else {
      console.log("Db is connecting");
    }
  }
);

app.use("/auth", authrouter);

app.all("*", (req, res) => res.send("That route doent's exits"));

app.listen(port, () => {
  console.log("server is connected", port);
});

const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./config/database.js");

const PORT = process.env.PORT || 3002
 
const app = express();
app.use(express.json());
app.use(cors());

const userCtrl =  require("./controllers/users.js")

// token is valid 
app.post("/register", userCtrl.create);
app.get("/login", userCtrl.login);



app.use("/*", (req, res) => {
    res.send("Please try another Route.")
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
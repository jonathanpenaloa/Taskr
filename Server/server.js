const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./config/database.js");

const PORT = process.env.PORT || 3002
 
const app = express();
app.use(express.json());
app.use(cors());

const userCtrl =  require("./controllers/users.js")

app.post("/users", userCtrl.create);

app.use("/*", (req, res) => {
    res.send("Please try another Route.")
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
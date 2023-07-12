const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

require("dotenv").config();
require("./config/database.js");

const PORT = process.env.PORT || 3002
 
const app = express();
app.use(express.json());
app.use(cors());

const userCtrl = require("./controllers/users.js");

// EMPLOYEE CONTROLLERS
const { updateEmployee, createEmployee, deleteEmployee, getAllEmployees } =  require("./controllers/employee.js");


// TEAMS CONTROLLERS 
const { createTeam, updateTeam, deleteTeam, getAllTeams } = require("./controllers/teams.js");

// token is valid 
app.put("/verifySession", (req, res) => {
    const token = req.header("Authorization");
    try {   
        const decodesUser = jwt.verify(token, process.env.SECRET);
        res.send(decodesUser);
    } catch(err) {
        res.status(404).send("Invalide User");
    }
});

//Users 
app.post("/register", userCtrl.create);
app.put("/login", userCtrl.login);


//Employee
app.get("/allEmployees", getAllEmployees);
app.post("/createEmployee", createEmployee);
app.put("/employee/:employeeId", updateEmployee);
app.delete("/employee/:employeeId", deleteEmployee);

// Team 
app.post("/createTeam", createTeam);
app.put("/updateTeam/:teamId", updateTeam);
app.delete('/teams/:teamId', deleteTeam);
app.get("/allTeams", getAllTeams)

app.use("/*", (req, res) => {
    res.send("Please try another Route.")
})


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
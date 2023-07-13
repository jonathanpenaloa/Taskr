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
const { updateEmployee, createEmployee, deleteEmployee, getAllEmployees } = require("./controllers/employee.js");


// TEAMS CONTROLLERS 
const { createTeam, updateTeam, deleteTeam, getAllTeams, addMember } = require("./controllers/teams.js");


// TASKS CONTROLLERS
const { createTask, updateTask, deleteTask, getAllTask } = require("./controllers/tasks.js");

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
app.get("/employee", getAllEmployees);
app.post("/employee", createEmployee);
app.put("/employee/:employeeId", updateEmployee);
app.delete("/employee/:employeeId", deleteEmployee);

// Team 
app.post("/teams", createTeam);
app.put("/teams/:teamId", updateTeam);
app.delete('/teams/:teamId', deleteTeam);
app.get("/teams", getAllTeams);
app.put('/teams/addMember/:teamId', addMember);

// Task 
app.post("/task", createTask);
app.put("/task/:taskId", updateTask);
app.delete("/task/:taskId", deleteTask);
app.get("/task", getAllTask);


app.use("/*", (req, res) => {
    res.send("Please try another Route.");
});




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
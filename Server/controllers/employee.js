const Employee = require("../models/employee");

const createEmployee = async(req, res) => {
    const employee = req.body;
    try {
        const response = await Employee.create(employee)
        .populate("hiredBy").sort("-createAt").exec();
        res.send(response)
    } catch(err) {
        res.send().status(500).json("Employee was not added")
    }
 }

 const updateEmployee = async (req, res) => {
    const employeeId = req.params.employeeId;
    const changesForEmployee = req.body;
    try {
        const updatedEmployeeInfo = 
        await Employee.findByIdAndUpdate(employeeId, changesForEmployee, { new : true })
        .populate("hiredBy").sort("-createAt").exec();
        res.send(updatedEmployeeInfo);
    } catch(err) {
        res.send("employee was not updated").status(500);
    }
 }

 const deleteEmployee = async (req, res) => {
    const employeeId = req.params.employeeId;
    const deletedEmployee = await Employee.findOneAndDelete(employeeId)
    .populate("hiredBy").sort("-createAt").exec();
    res.send(deletedEmployee); 
 }

 const getAllEmployees = async (req, res) => {
    const employeeList = await Employee.find({})
    .populate("hiredBy").sort("-createAt").exec();
    res.send(employeeList);
 }
 module.exports = {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getAllEmployees
 }
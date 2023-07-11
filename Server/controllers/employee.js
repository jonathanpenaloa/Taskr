const Employee = require("../models/employee");


const createEmployee =  async(req, res) => {
    const employee = req.body;
    try {
        const response = await Employee.create(employee);
        res.send(response)
    } catch(err) {
        res.send().status(500).json("Employee was not added")
    }
 }

 const updateEmployee = async (req, res) => {
    const employeeId = req.params.employeeId;
    const changesForEmployee = req.body;
    try {
        const newEmployeeInfo = await Employee.findByIdAndUpdate(employeeId, changesForEmployee, { new : true });
        res.send(newEmployeeInfo);
    } catch(err) {
        res.send("employee was not updated").status(500);
    }
 }
 module.exports = {
    createEmployee,
    updateEmployee
 }
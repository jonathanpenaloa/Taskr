const Tasks = require("../models/task");
const Employee = require("../models/employee");

const createTask = async (req, res) => {
    const task = req.body;
    try {
        const task_added_ToDB = await (await Tasks.create(task)).populate("assignTo");
        res.json(task_added_ToDB);
    } catch(err) {
        res.status(404).json({ message: "Task was not made" });
    }
}


const updateTask = () => {

}
const deleteTask = () => {

}
const getAllTask = () => {

}

module.exports = {
    createTask,
}
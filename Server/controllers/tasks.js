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

const updateTask = async (req, res) => {
    const {taskId} = req.params
    const changedTaskInfo = req.body;
    try {
        const updatedTaskFromDB = await Tasks.findByIdAndUpdate(taskId, changedTaskInfo, { new : true })
        .populate("assignTo");
        res.json(updatedTaskFromDB);
    } catch(err) {
        res.status(404).json({ message: "Task was noy updated" });
    }
}

const deleteTask = async (req, res) => {
    const {taskId} = req.params;
    try {
        const deltedTaskFromDB = await Tasks.findByIdAndDelete(taskId);
        res.json(deltedTaskFromDB);
    } catch(err) {
        res.status(404).json({message : "Task was not deleted"});
    }
}

const getAllTask = async (req, res) => {
    try {
        const allTaskFromDB = await Tasks.find({}).populate("assignTo").sort("-createAt");
        res.json(allTaskFromDB);
    } catch(err) {
        res.status(404).json({ message: "Did not find any Task" });
    }
}

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getAllTask,
}
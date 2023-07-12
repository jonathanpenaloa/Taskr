const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        require: true,
    }, 
    process: {
        type: String,
        emum: ["started", 'stuck', "completed"],
        default: "Started",
    },
    assignTo: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Employee",
        require: true,
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium",
    },
}, {timestamps: true});

module.exports = mongoose.model("Task", taskSchema);

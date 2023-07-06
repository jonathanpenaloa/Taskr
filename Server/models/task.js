const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        require: true,
    }, 
    process: {
        type: Boolean,
        default: false
    },
    assingTo: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Employee",
        require: true,
    }
}, {timestamps: true});

module.exports = mongoose.model("Task", taskSchema);

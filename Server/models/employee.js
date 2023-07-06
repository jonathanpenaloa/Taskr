const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: { 
        type: String,
        require: true,
    },
    hiredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    active: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Employee", employeeSchema)
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    members: [
        {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Employee",
        },
    ],
}, {timestamps: true});

module.exports = mongoose.model("Team", teamSchema);


const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        minLength: 2
    },
    isManager: {
        type: Boolean,
        require: true,
        default: false
    },
    email: {
        type: String,
        unique: true,
        require: true,
        match: /.+@.+\.\w+/,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minLength: 3
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user");


const create = async (req, res) => {
    try {
        // sending email, pass, and name to the req
        const { name, email, password } = req.body;
        // checking by email - needs to be unique in DB
        const existingUser = await User.findOne({ email });
        // if email is already used - send 400 status
        if(existingUser) {
            return res.status(400).json({ message: "Email already in register"})
        } 
        // new user!
        // hash password from req.body
        const hashedPassword = await bcrypt.hash(password, 10);

        // Making user obj with data;
        const newUser = await User.create({ name: name, email: email, password: hashedPassword });
        //save the new user to DB
        await newUser.save();
        // res with message of good registration 
        res.status(200).json({ message: "user registration successfull" });
        // catch err 
    } catch (err) {
        // res with err
        res.status(500).json({ message: "Registration failed", err })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user obj from DB  by email 
        const user = await User.findOne({ email: email });

        // no user with email found
        if(!user) {
            return res.status(401).json({ message: "Sign up failed, email is not registerd"})
        }

        // compre hashedpass in db with password user entered
        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword) {
            return res.status(401).json({ message: "Password is incorrect" })
        }
        /// make a token for the logged in user 
        // set expiration time for token
        const token = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: "2h" });
        // send the token back 
        res.status(200).json({ token })
    } catch(err) {
        res.status(500).json({ message: "Login Failed" });
    }
}


module.exports = {
    create,
    login,
}
const User = require("../models/user");


const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.json(err)
    }
}


module.exports = {
    create,
}
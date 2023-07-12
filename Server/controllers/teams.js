const Teams = require("../models/team");


const createTeam = async (req, res) => {
    const name = req.body.name;
    const nameIsUsed = await Teams.findOne( { name } );
    if(!nameIsUsed) {
        try {
        const team = await Teams.create(req.body);
           await res.send(team);
        } catch(err) {
            res.status(404).json("Did not create a team");
        }
    } else {
        res.json("Team Name Taken");
    }
}

const getAllTeams = (req, res) => {

}

const updateTeams = (req, res) => {

}

const deleteTeam = (req, res) => {

}

module.exports = {
    createTeam
}

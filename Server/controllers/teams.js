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

const getAllTeams = async (req, res) => {
    const teamList = await Teams.find({});
    res.send(teamList);
}

const updateTeam =  async (req, res) => {
    const { teamId } = req.params;
    const newTeamData = req.body;

    try {
        const updatedTeamFromDB = await Teams.findByIdAndUpdate(teamId, newTeamData, { new: true });
        
        if(!updatedTeamFromDB) {
            res.status(404).json({ message: "Team not found" });
        }

        res.json(updatedTeamFromDB);
    } catch(err) {
        res.status(500).json({ message: "Error updating Team" });
    }
}

const deleteTeam = async (req, res) => {
    const { teamId } = req.params; 

    try {
      const deletedTeamFromDB = await Teams.findByIdAndDelete(teamId);
  
      if (!deletedTeamFromDB) {
        return res.status(404).json({ message: "Team not found" });
      }
  
      res.json(deletedTeamFromDB);
    } catch (error) {
      res.status(500).json({ message: "Error deleting team" });
    }
}

module.exports = {
    createTeam,
    updateTeam,
    deleteTeam,
    getAllTeams
}

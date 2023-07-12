const Teams = require("../models/team");
const Employee = require("../models/employee");


const createTeam = async (req, res) => {
    const { name, members } = req.body;
  
    try {
      const teamExists = await Teams.findOne({ name });
  
      if (teamExists) {
        return res.status(409).json({ message: "Team name already taken" });
      }
  
      const team = await Teams.create({ name, members });

      res.json(team);

    } catch (err) {

      res.status(500).json({ message: "Error creating team" });
    }
  };

const getAllTeams = async (req, res) => {
    const teamList = await Teams.find({}).populate("members").sort({ createAt: -1 });
    res.send(teamList);
}

const updateTeam = async (req, res) => {
    const { teamId } = req.params;
    const newTeamData = req.body;
  
    try {
      const updatedTeamFromDB = await Teams.findByIdAndUpdate(teamId, newTeamData, { new: true }).populate("members");
  
      if (!updatedTeamFromDB) {
        return res.status(404).json({ message: "Team not found" });
      }
  
      res.json(updatedTeamFromDB);
      
    } catch (err) {
      res.status(500).json({ message: "Error updating team" });
    }
  };

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

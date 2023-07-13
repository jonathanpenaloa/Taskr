const Teams = require("../models/team");
const Employee = require("../models/employee");

const userId = "64ad9ca041a6ae5df30bcd82"
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
    const teamId  = req.params.teamId;
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

const addMember = async (req, res) => {
    const teamId  = req.params.teamId;
    const newMemberName = req.body.name;

    if(!newMemberName) {
      return res.send("Name was not in request body");
    }
    
  try {
    const teamFromDb = await Teams.findById(teamId).populate("members");
    // make new emplyee in employee colelction
    const newEmployee = await (await Employee.create({ name: newMemberName, hiredBy: userId })).populate('hiredBy')
    // we will get the id of the new member from db
    // teamFromDb.memebers.push(thatId)
    teamFromDb.members.push(newEmployee._id);

    await teamFromDb.save()
    console.log(newEmployee);
    //teamFromDb.save();
    res.status(200).json(teamFromDb);
    } catch(err) {
      res.status(500).json({message: "Failed to add"});
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
    getAllTeams,
    addMember
}

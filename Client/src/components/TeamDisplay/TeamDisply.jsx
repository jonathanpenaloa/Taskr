import React, { useContext, useState } from 'react';
import { primaryContext } from '../../contexts/PrimaryContext';
import axios from 'axios';
import "./TeamDisplay.css"

const TeamDisplay = () => {

    const { selectedTeam, setSelectedTeam } = useContext(primaryContext);

    const [newMemberName, setNewMemeberName] = useState("");


    if (!selectedTeam) return <></> 

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios({
                method: "PUT",
                url: `/teams/addMember/${selectedTeam._id}`,
                data: {
                    name : newMemberName
                }
            });
            console.log(data);
            setSelectedTeam(data);
            setNewMemeberName('');
        } catch(err){
            console.log(err);
        }
    }

   
    return (
        <div>
            <h1>
            {selectedTeam.name}        
            </h1> 
            <form onSubmit={handleSubmit} >
                <label>Add Team Member</label>
                <input value={newMemberName} onChange={(e) => setNewMemeberName(e.target.value)} type="text" name="name" required />
                <button>submit</button>
            </form>
            <div className='team-names' >
                {selectedTeam.members.map((memeber) => {
                    return (
                        <div className='name-button' key={memeber._id}>
                            <div>
                                {memeber.name}
                            </div>
                            <button>X</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TeamDisplay;


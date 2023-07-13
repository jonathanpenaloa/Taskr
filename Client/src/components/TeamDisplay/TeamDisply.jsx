import React, { useContext, useState } from 'react';
import { primaryContext } from '../../contexts/PrimaryContext';
import axios from 'axios';

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
        } catch(err){
            console.log(err);
        }
    }

   
    return (
        <div>
            <h1>
            {selectedTeam.name}        
            </h1> 
            <div>
                {selectedTeam.members.map((memeber) => {
                    return (
                        <div key={memeber._id}>
                            <div>
                                {memeber.name}
                            </div>
                            <button>X</button>
                        </div>
                    );
                })}
            </div>
            <form onSubmit={handleSubmit} >
                <input value={newMemberName} onChange={(e) => setNewMemeberName(e.target.value)} type="text" name="name" id="" />
                <button>submit</button>
            </form>
        </div>
    );
}

export default TeamDisplay;


import React, { useContext } from 'react';
import "./TeamCard.css";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { primaryContext } from '../../contexts/PrimaryContext';


const TeamCard = ({team}) => {

    const {setSelectedTeam} = useContext(primaryContext)

    const teamAvatar = team.members.map((memeber) => {
        return <Avatar style={{backgroundColor: "orange"}} key={memeber._id} >{memeber.name}</Avatar>
    });

    const handleTeamClick = () => {
        setSelectedTeam(team);
    }   

    return (
        <div className='team-card' onClick={handleTeamClick} >
            <h2 className='team-name'>{team.name}</h2>
            <AvatarGroup max={4}>
                {teamAvatar}
            </AvatarGroup>
        </div>
    );
}

export default TeamCard;

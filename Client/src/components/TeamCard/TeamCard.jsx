import React from 'react';
import "./TeamCard.css";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import axios from 'axios';


const TeamCard = () => {


    return (
        <div className='team-card'>
            <h2 className='team-name'>Team Z</h2>
            <AvatarGroup max={4}>
                <Avatar alt="name" src="/logo.png" />
                <Avatar alt="name" src="/logo.png" />
            </AvatarGroup>
        </div>
    );
}

export default TeamCard;

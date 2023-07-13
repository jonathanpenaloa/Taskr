import React from 'react';
import { useContext, useEffect } from 'react';
import TeamCard from '../../components/TeamCard/TeamCard';
import { primaryContext } from '../../contexts/PrimaryContext';
import TeamDisplay from '../../components/TeamDisplay/TeamDisply';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Home.css"

const Home = () => {

    const { teams, setTeams} = useContext(primaryContext);


    useEffect(() => {
        const getAllTeamFromDB = async () => {
            const { data } = await axios({
                method: "GET",
                url: "/teams",
            });
            setTeams(data);
        } 
        getAllTeamFromDB()    
    }, [teams]);

    const teamCardsJsx = teams.map((team) => {
        return <TeamCard key={team._id} team={team} />
    })
    

    return (
        <main >
            Home Page
            <div className="teams">
            {teamCardsJsx}

            </div>
            <TeamDisplay />
            {/* /// Team Component */}
            {/* Employee Component  */}
            {/* Task component */}
        </main>
    );
}

export default Home;

import { createContext, useState } from 'react';

export const primaryContext = createContext();


const PrimaryContextProvider = ({ children }) => {

    const [token, setToken] = useState();
    const [user, setUser] = useState();
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState();


    const contextState = {
        token, 
        setToken,
        user,
        setUser,
        teams,
        setTeams,
        selectedTeam,
        setSelectedTeam
    }

    return (
        <primaryContext.Provider value={contextState} >
            {children}
        </primaryContext.Provider>
    );
}

export default PrimaryContextProvider;

import { createContext, useState } from 'react';

export const primaryContext = createContext();


const PrimaryContextProvider = ({ children }) => {

    const [token, setToken] = useState();
    const [user, setUser] = useState();


    const contextState = {
        token, 
        setToken,
        user,
        setUser
    }

    return (
        <primaryContext.Provider value={contextState} >
            {children}
        </primaryContext.Provider>
    );
}

export default PrimaryContextProvider;

import { createContext, useState } from 'react';

export const primarytContext = createContext();


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
        <primarytContext.Provider value={contextState} >
            {children}
        </primarytContext.Provider>
    );
}

export default PrimaryContextProvider;


import React, {useState, createContext} from 'react'
export const StatusContext = createContext();

export const StatusContextProvider = ({children}) => {
    const [status, setStatus] = useState(3);

    return <StatusContext.Provider value={[status, setStatus]}>{children}</StatusContext.Provider>
}
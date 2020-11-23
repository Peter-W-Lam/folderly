import React, {useState, createContext} from 'react'
import TestData from 'utils/data/TestData.json'
export const FileContext = createContext([]);

export const FileProvider = ({children}) => {
    const [file, setFile] = useState({});

    return <FileContext.Provider value={[file, setFile]}>{children}</FileContext.Provider>
}
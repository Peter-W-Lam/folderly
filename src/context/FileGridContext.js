import React, {useState, createContext} from 'react'
import FilesData from 'utils/data/FilesData.json'
import {GenerateFiles} from 'utils/GenerateFiles'

export const FileGridContext = createContext();

export const FileGridProvider = ({children}) => {

    const randomData = GenerateFiles();
    const [grid, setGrid] = useState([...randomData]);

    return <FileGridContext.Provider value={[grid, setGrid]}>{children}</FileGridContext.Provider>
}
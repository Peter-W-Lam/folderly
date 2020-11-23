import React, {useState, createContext} from 'react'
import {GenerateFiles} from 'utils/GenerateFiles'

export const FilteredGridContext = createContext();

export const FilteredGridProvider = ({children}) => {

    const randomData = GenerateFiles();
    const [filtered, setFiltered] = useState([...randomData]);

    return <FilteredGridContext.Provider value={[filtered, setFiltered]}>{children}</FilteredGridContext.Provider>
}